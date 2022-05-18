---
title: "Setting up code completion for ROS2 `c++` development"
slug: ros2_cpp_code_completion
date: 2022-01-04T04:23:20-05:00
draft: false
toc: true
katex: false
back_to_top: false
tags: ['programming', 'vim', 'robots']
website_carbon: true
---


## Using `clangd` 

ROS2 puts its headers into a rather non-standard location, `/opt/ros2/<ROS_DISTRO>/include`.
Obviously this doesn't play well with standard `clangd` setups, and it would be *too* easy if it just worked out of the box with `vim`!
Most editors like vscode or clion have their own way of handling scenarios like this, e.g. vscode using a `c_cpp_properties.json` file.

> For vscode setup, see [this](https://www.allisonthackston.com/articles/vscode-docker-ros2.html) or [this](https://erdalpekel.de/?p=157)


With vim this is as little uglier. 
Nothing that `clang` supports using either a `compile_commands.json` file or a `compile_flags.txt` file [source](https://clangd.llvm.org/installation.html#project-setup), we can either:

### Method 0
As it turns out there are [`colcon mixins`](https://colcon.readthedocs.io/en/released/reference/verb/mixin.html), though the use of which is not exactly well documented.
Steps for use are as follows:

1. Install the `python3-colcon-mixin` package; `sudo apt install python3-colcon-mixin`
2. Fetch the 'default' `colcon` mixins: 
  1. Add the default mixins file:
  ``` 
  colcon mixin add default https://raw.githubusercontent.com/colcon/colcon-mixin-repository/master/index.yaml
  ```
  2. Fetch them: `colcon mixin update default`
3. Use them: `colcon build --mixin compile_commands`

And this will work out of the box to generate the relevant `compile_commands.json` files.


### Method 1
Generate a `compile_commands` file using `colcon build --cmake-args -DCMAKE_EXPORT_COMPILE_COMMANDS=ON`
It's also probably prudent to add this to your `CMakeLists.txt` file anyways, 

```cmake
# CMakeLists.txt

# This should work
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# ... but if it doesn't, try this workaround
set(CMAKE_EXPORT_COMPILE_COMMANDS ON CACHE INTERNAL "")
```

Note that this requires there to be a buildable `ros2` package in your workspace, so if one is just getting started maybe try cloning the `ros2_tutorials` package or copy-pasting a simple pub-sub just to get a `compile_commands.json` file.

**OR**, try using [bear](https://github.com/rizsotto/Bear) which works great in my experience.


If all else fails, try dropping in a minimal `compile_commands.json` file with the following contents, making sure to edit the filepaths accordingly:

```json
// compile_commands.json
[ {
  "directory": "<YOUR_ROS2_WORKSPACE>/src/build/<YOUR_ROS2_PACKAGE",
  "command": "/usr/bin/c++ -DDEFAULT_RMW_IMPLEMENTATION=rmw_fastrtps_cpp -DRCUTILS_ENABLE_FAULT_INJECTION -DSPDLOG_COMPILED_LIB -isystem /opt/ros2/foxy/include -Wall -Wextra -Wpedantic -std=gnu++14 -o CMakeFiles/<YOUR_PACKAGE_NAME>.dir/src/<YOUR_FILE_NAME>.o -c <YOUR_ROS2_WORKSPACE>/src/<YOUR_ROS2_PACKAGE>/src/<YOUR_FILE_NAME>.cpp",
  "file": "<YOUR_ROS2_WORKSPACE>/src/<YOUR_ROS2_PACKAGE>/src/<YOUR_FILE_NAME>.cpp"
} ]
```





### Method 2
Place a `compile_flags.txt` file with `-I /opt/ros2/<ROS_DISTRO>/include` in your project root



For more, see [this](https://github.com/clangd/coc-clangd/issues/28)























