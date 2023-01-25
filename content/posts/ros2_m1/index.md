---
title: "ros2 humble on apple silicon"
slug: "ros2_m1"
date: 2023-01-21T18:59:53-05:00
draft: true
katex: true
toc: true
tags: ["programming", "robots"]
website_carbon: true
---

> I got a shiny new macbook and was sad that I had to dual-boot into asahi (which is actually a suprisngly robust experience at the time of writing) to do ROS2 work. So I did the only sensible thing and spent the better part of a day making `ros2` build on an m1 mac on macos Ventura.



# Preliminary


# Patches Galore

# Notes






- `python -m pip install numpy --no-binary=:all:`
- install freeimage
- brew install gpsd pcl
- install opengl
- make a venv
- add the python-config script to the venv
- to deal with pygraphviz issue: `pip install --global-option=build_ext --global-option="-I$(brew --prefix graphviz)/include/" --global-option="-L$(brew --prefix graphviz)/lib/" pygraphviz`
    - install graphviz
- there's this absurd thing where `python3-config --ldflags` doesn't work properly 
    - to get around it, apply this diff to `python_cmake_module`. You will have to change <USERNAME> and your python version.

```diff
diff --git a/cmake/Modules/FindPythonExtra.cmake b/cmake/Modules/FindPythonExtra.cmake
index 9e18f83..16af911 100644
--- a/cmake/Modules/FindPythonExtra.cmake
+++ b/cmake/Modules/FindPythonExtra.cmake
@@ -101,6 +101,7 @@ if(PYTHONINTERP_FOUND)
           "error code ${_result}")
       endif()
 
+      set(_output "-L/Users/<USERNAME>/.pyenv/versions/3.10.9/lib/python3.10/config-3.10-darwin -lpython3.10 -ldl -framework CoreFoundation")
       string(REPLACE " " ";" _output_list "${_output}")
       set(PythonExtra_LIBRARIES
         ""
```


```py
#${VENV}/bin/python3-config
```python
This python-config script was taken from a virtual environment
created by `virtualenv`.
The only change is the hash-bang line.
The user shall copy this to ${VENV}/bin during setup.
:author: unknown + AA
:date: 2018-02-23
"""

import sys
import getopt
import sysconfig

valid_opts = ['prefix', 'exec-prefix', 'includes', 'libs', 'cflags',
              'ldflags', 'help']

if sys.version_info >= (3, 2):
    valid_opts.insert(-1, 'extension-suffix')
    valid_opts.append('abiflags')
if sys.version_info >= (3, 3):
    valid_opts.append('configdir')


def exit_with_usage(code=1):
    sys.stderr.write("Usage: {0} [{1}]\n".format(
        sys.argv[0], '|'.join('--'+opt for opt in valid_opts)))
    sys.exit(code)

try:
    opts, args = getopt.getopt(sys.argv[1:], '', valid_opts)
except getopt.error:
    exit_with_usage()

if not opts:
    exit_with_usage()

pyver = sysconfig.get_config_var('VERSION')
getvar = sysconfig.get_config_var

opt_flags = [flag for (flag, val) in opts]

if '--help' in opt_flags:
    exit_with_usage(code=0)

for opt in opt_flags:
    if opt == '--prefix':
        print(sysconfig.get_config_var('prefix'))

    elif opt == '--exec-prefix':
        print(sysconfig.get_config_var('exec_prefix'))

    elif opt in ('--includes', '--cflags'):
        flags = ['-I' + sysconfig.get_path('include'),
                 '-I' + sysconfig.get_path('platinclude')]
        if opt == '--cflags':
            flags.extend(getvar('CFLAGS').split())
        print(' '.join(flags))

    elif opt in ('--libs', '--ldflags'):
        abiflags = getattr(sys, 'abiflags', '')
        libs = ['-lpython' + pyver + abiflags]
        libs += getvar('LIBS').split()
        libs += getvar('SYSLIBS').split()
        # add the prefix/lib/pythonX.Y/config dir, but only if there is no
        # shared library in prefix/lib/.
        if opt == '--ldflags':
            if not getvar('Py_ENABLE_SHARED'):
                libs.insert(0, '-L' + getvar('LIBPL'))
            if not getvar('PYTHONFRAMEWORK'):
                libs.extend(getvar('LINKFORSHARED').split())
        print(' '.join(libs))

    elif opt == '--extension-suffix':
        ext_suffix = sysconfig.get_config_var('EXT_SUFFIX')
        if ext_suffix is None:
            ext_suffix = sysconfig.get_config_var('SO')
        print(ext_suffix)

    elif opt == '--abiflags':
        if not getattr(sys, 'abiflags', None):
            exit_with_usage()
        print(sys.abiflags)

    elif opt == '--configdir':
        print(sysconfig.get_config_var('LIBPL'))
```

- brew install gpatch
- make sure homebrew qt isn't installed or at least unlink it (cmake gets confused) since homebrew qt is qt6 now. Install qt@5 instead (for rviz_rendering)
    - rviz_rendering needs rviz_ogre_vendor which find_packges OpenGL. This lives on osx as a framework.
    - So need to have CMAKE_FIND_FRAMEWORK set to LAST and qt5 at the top of path
    - for some godforsaken reason you will have to bump this to the top of PATH
        - export PATH="/opt/homebrew/opt/qt@5/bin:$PATH"
    - will have to wipe build/rvis_rendering to if this issue happens

- git clone https://github.com/orocos/orocos_kinematics_dynamics --recurse-submodules

Build command:

```bash
python3 -m colcon build \
  --event-handlers console_cohesion+ console_package_list+ \
  --packages-skip-by-dep python_qt_binding \
  --cmake-args \
    --no-warn-unused-cli \
    -DPython_FIND_VIRTUALENV=ONLY \
    -DCMAKE_FIND_FRAMEWORK=NEVER \
    -DBUILD_TESTING=OFF \
    -DINSTALL_EXAMPLES=ON \
    -DCMAKE_OSX_SYSROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \
    -DCMAKE_OSX_ARCHITECTURES="arm64" \
    -DCMAKE_PREFIX_PATH=$(brew --prefix):$(brew --prefix qt@5) \
    -DPython_EXECUTABLE=/Users/ihasdapie/Projects/ros2/.venv/bin/python3 \
    -DCMAKE_CXX_FLAGS="-std=c++17"
```


Perform the following patches:


```cmake
diff --git a/orocos_kdl/CMakeLists.txt b/orocos_kdl/CMakeLists.txt
index a1b335c..721494a 100644
--- a/orocos_kdl/CMakeLists.txt
+++ b/orocos_kdl/CMakeLists.txt
@@ -13,6 +13,7 @@ CMAKE_MINIMUM_REQUIRED(VERSION 3.0.2)
PROJECT(orocos_kdl)

SET( KDL_VERSION 1.5.1)
+SET( CMAKE_CXX_STANDARD 11)
STRING( REGEX MATCHALL "[0-9]+" KDL_VERSIONS ${KDL_VERSION} )
LIST( GET KDL_VERSIONS 0 KDL_VERSION_MAJOR)
LIST( GET KDL_VERSIONS 1 KDL_VERSION_MINOR)
```

```cmake
diff --git a/CMakeLists.txt b/CMakeLists.txt
index faac7e1b..c36877c3 100644
--- a/CMakeLists.txt
+++ b/CMakeLists.txt
@@ -120,7 +120,7 @@ macro(build_ogre)
     set(OGRE_CXX_FLAGS "${OGRE_CXX_FLAGS} /w /EHsc")
   elseif(APPLE)
     set(OGRE_CXX_FLAGS "${OGRE_CXX_FLAGS} -std=c++14 -stdlib=libc++ -w")
-    list(APPEND extra_cmake_args "-DCMAKE_OSX_ARCHITECTURES='x86_64'")
+    list(APPEND extra_cmake_args "-DCMAKE_OSX_ARCHITECTURES='arm64'")
   else()  # Linux
     set(OGRE_C_FLAGS "${OGRE_C_FLAGS} -w")
     # include Clang -Wno-everything to disable warnings in that build. GCC doesn't mind it
```
```cmake
--- build/rviz_ogre_vendor/ogre-v1.12.1-prefix/src/ogre-v1.12.1/OgreMain/include/OgrePlatformInformation.h.orig	2021-06-02 16:28:58.000000000 -0400
+++ build/rviz_ogre_vendor/ogre-v1.12.1-prefix/src/ogre-v1.12.1/OgreMain/include/OgrePlatformInformation.h	2021-06-02 16:30:50.000000000 -0400
@@ -50,11 +50,11 @@
 #   define OGRE_CPU OGRE_CPU_X86

 #elif OGRE_PLATFORM == OGRE_PLATFORM_APPLE && defined(__BIG_ENDIAN__)
 #   define OGRE_CPU OGRE_CPU_PPC
 #elif OGRE_PLATFORM == OGRE_PLATFORM_APPLE
-#   define OGRE_CPU OGRE_CPU_X86
+#   define OGRE_CPU OGRE_CPU_ARM
 #elif OGRE_PLATFORM == OGRE_PLATFORM_APPLE_IOS && (defined(__i386__) || defined(__x86_64__))
 #   define OGRE_CPU OGRE_CPU_X86
 #elif defined(__arm__) || defined(_M_ARM) || defined(__arm64__) || defined(__aarch64__)
 #   define OGRE_CPU OGRE_CPU_ARM
 #elif defined(__mips64) || defined(__mips64_)
```

```cmake
```cmake
diff --git a/orocos_kdl/CMakeLists.txt b/orocos_kdl/CMakeLists.txt
index a1b335c..721494a 100644
--- a/orocos_kdl/CMakeLists.txt
+++ b/orocos_kdl/CMakeLists.txt
@@ -13,6 +13,7 @@ CMAKE_MINIMUM_REQUIRED(VERSION 3.0.2)
PROJECT(orocos_kdl)

SET( KDL_VERSION 1.5.1)
+SET( CMAKE_CXX_STANDARD 11)
STRING( REGEX MATCHALL "[0-9]+" KDL_VERSIONS ${KDL_VERSION} )
LIST( GET KDL_VERSIONS 0 KDL_VERSION_MAJOR)
LIST( GET KDL_VERSIONS 1 KDL_VERSION_MINOR)
```



```cmake


diff --git a/kdl_parser/package.xml b/kdl_parser/package.xml
index 39a02d2..08baa3c 100644
--- a/kdl_parser/package.xml
+++ b/kdl_parser/package.xml
@@ -23,6 +23,7 @@
   <buildtool_depend>ament_cmake_ros</buildtool_depend>
 
   <depend>orocos_kdl_vendor</depend>
+  <depend>orocos_kdl</depend>
   <depend>rcutils</depend>
 
   <build_depend>urdf</build_depend>
   ```

Disable the patch and bump pybind11 to a newer commit with fixes for python3.11

```cmake
```cmake

diff --git a/CMakeLists.txt b/CMakeLists.txt
index 309a628..f940ae0 100644
--- a/CMakeLists.txt
+++ b/CMakeLists.txt
@@ -55,7 +55,7 @@ macro(build_pybind11)
   include(ExternalProject)
   ExternalProject_Add(pybind11-2.9.1
     GIT_REPOSITORY https://github.com/pybind/pybind11.git
-    GIT_TAG ffa346860b306c9bbfb341aed9c14c067751feb8  # v2.9.1
+    GIT_TAG 42a8e3125348d4e706e46eb410befc1422d42b3f  # v2.9.1
     GIT_CONFIG advice.detachedHead=false
     # Suppress git update due to https://gitlab.kitware.com/cmake/cmake/-/issues/16419
     # See https://github.com/ament/uncrustify_vendor/pull/22 for details
@@ -72,9 +72,6 @@ macro(build_pybind11)
     # definitions for Py_DEBUG, which MSVC complains about.  This patch switches
     # the internal pybind11 variable to be called PYBIND11_DEBUG, which avoids
     # the issue.
-    PATCH_COMMAND
-      ${CMAKE_COMMAND} -E chdir <SOURCE_DIR> git apply -p1 --ignore-space-change --whitespace=nowarn
-        ${CMAKE_CURRENT_SOURCE_DIR}/pybind11-2.9.1-fix-windows-debug.patch
   )
 
   # The external project will install to the build folder, but we'll install that on make install.
```

- ros-control/realtime_tools uses a linux-specific syscall

```cmake
diff --git a/src/thread_priority.cpp b/src/thread_priority.cpp
index 72749e3..4efadb9 100644
--- a/src/thread_priority.cpp
+++ b/src/thread_priority.cpp
@@ -50,7 +50,11 @@ bool configure_sched_fifo(int priority)
   struct sched_param schedp;
   memset(&schedp, 0, sizeof(schedp));
   schedp.sched_priority = priority;
-  return !sched_setscheduler(0, SCHED_FIFO, &schedp);
+#if defined(__APPLE__)
+  return !pthread_setschedparam(pthread_self(), SCHED_FIFO, &schedp);
+#else
+  return !sched_setscheduler(p, SCHED_FIFO, &schedp);
+#endif
 }
 
 }  // namespace realtime_tools
```

- current macos system python at time of writing is 3.10.9 and is also the same version I used for the venv. Current boost-python3 version is incompatabile. 

- brian's tap @ ihasdapie/homebrew-formulas/boost-python3 and ihasdapie/homebrew-formulas/boost @ 1.80 which is latest version on 3.10


another kdl dep to patch

```cmake

diff --git a/tf2_kdl/package.xml b/tf2_kdl/package.xml
index b8ef997..e7b7a98 100644
--- a/tf2_kdl/package.xml
+++ b/tf2_kdl/package.xml
@@ -16,6 +16,7 @@
   <depend>builtin_interfaces</depend>
   <depend>geometry_msgs</depend>
   <depend>orocos_kdl_vendor</depend>
+  <depend>orocos_kdl</depend>
   <depend>tf2</depend>
   <depend>tf2_ros</depend>
 
```

other packages with same orocos_kdl: tf2_geometry_msgs






- homebrew qt5 thinks things are installed in inane places. workaround:

```ln -s opt/qt@5/mkspecs /opt/homebrew/mkspecs
ln -s /opt/homebrew/Cellar/qt@5/5.15.8_1/plugins /opt/homebrew/plugins
```

- use g++ 
export CXX=$(which aarch64-apple-darwin22-g++-12)
export CC=$(which aarch64-apple-darwin22-gcc-12)

