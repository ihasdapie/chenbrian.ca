---
title: "Retrospective: Internship @ Open Robotics"
slug: "osrf-internship-retrospective"
date: 2022-08-18T01:20:00-07:00
draft: false
katex: true
toc: false
tags: ['robots', 'programming', 'about_me']
website_carbon: true
---


I spent summer 2022 interning at [Open Robotics](openrobotics.org/)[^acquire], a non-profit organization that spawned [^spawn] and maintains [ROS, ROS2](https://www.ros.org/) (**R**obot **O**perating **S**ystem) and the [Gazebo](https://gazebosim.org/) simulator.

[^acquire]: They've since been acquired by Intrinsic, an Alphabet company






Since writing up an retrospective is a lot more work than I'd like to put in right now, here's the output of `gh search prs --involves ihasdapie -L 100` in the relevant ros orgs, if that's of interest.
It's also pretty cool to see the [Iron Irwini Release Notes](https://docs.ros.org/en/iron/Releases/Release-Iron-Irwini.html) since I worked on a number of features there, most notably [service introspection](https://docs.ros.org/en/iron/Releases/Release-Iron-Irwini.html#service-introspection)

```yaml
ros2/rosbag2#1359: [Design] Add design on recording and replay service
ros2/unique_identifier_msgs#25: patch for mapping uuid via `ros1_bridge`
ros2/rosidl_defaults#24: [Service introspection] service_msgs dependency
ros2/ros2_documentation#2981: Service Introspection Documentation and Tutorial
ros2/rclpy#997: Add executor.spin_some
ros-simulation/gazebo_ros_pkgs#1423: Add rectification matrix in sdf, docs, and example usage
ros2/rmw#329: make writer_guid uint8_t[] instead of int8_t[] for consistency with rmw_gid_t
ros2/rmw_dds_common#63: decrease length of test gids to account for 16 byte rmw_gid_t in tests
ros2/rmw#328: change RMW_GID_STORAGE_SIZE from 24 to 16
ros2/unique_identifier_msgs#24: Depend on rosidl_core instead of rosidl_defaults
ros2/ros2#1316: Add repository rosidl_core
ros2/rosidl_core#1: Add generators and runtime configuration packages	enhancement	
ros2/rmw_implementation#206: Add rmw_get_gid_for_client & tests
ros2/rmw_connextdds#92: Add rmw_get_gid_for_client impl
ros2/rmw_cyclonedds#402: Add rmw_get_gid_for_client impl
ros2/rmw_fastrtps#631: Add rmw_get_gid_for_client impl	enhancement
ros2/rmw#327: Add rmw_get_gid_for_client method	enhancement
ros2/rosidl#701: Move rosidl_generator_c/cpp tests to a separate package
ros2/rosbag2#1063: [service introspection] add syntactic sugar for recording services
ros2/ros2cli#745: [service introspection] ros2 service echo
ros2/rosidl_python#178: Service introspection
ros2/rosidl_typesupport_fastrtps#92: Service introspection
ros2/rosidl_typesupport#127: Service introspection
ros2/rclpy#988: Service introspection
ros2/rclcpp#1985: Service introspection
ros2/rcl#997: Service introspection
ros2/rosidl#700: [service introspection] generate service_event messages
ros2/rosidl_defaults#23: Break rosidl_defaults into rosidl_core and rosidl_defaults
ros-visualization/interactive_markers#97: Make compatible with service introspection
ros2/unique_identifier_msgs#23: depend on rosidl_core_generators for packages required by actions
ros-simulation/gazebo_ros_pkgs#1414: Fix console errors and warnings when launching gzserver	bug
ros2/rclcpp#1981: [docs] add note about callback lifetime for {on, post}_set_parameter_callback
ros2/rosidl_defaults#22: Create package rosidl_core_generators	enhancement
ros2/rosidl_dds#59: Replace rosidl_cmake imports with rosidl_pycommon
ros2/rosidl_typesupport_fastrtps#91: Replace rosidl_cmake imports with rosidl_pycommon
ros2/rosidl_typesupport#126: Replace rosidl_cmake imports with rosidl_pycommon
ros2/rosidl_python#177: Replace rosidl_cmake imports with rosidl_pycommon
ros2/rosidl#696: Move rosidl_cmake Python module to a new package rosidl_pycommon
ros2/demos#578: Change dependency from 'rosidl_cmake' to 'rosidl_default_generators'
ros2/rosidl#695: Fix build export dependencies in C introspection package
ros2/rcl_interfaces#143: Add service_msgs package
ros2/rclpy#979: Improve static typings
gazebosim/gz-sensors#249: Camera: configure projection matrix from SDFormat	enhancement, 🏰 citadel
gazebosim/sdformat#1088: sdf/camera.sdf: fields for projection matrix	enhancement, 🏰 citadel, Gazebo 1️1️
ros-simulation/gazebo_ros_pkgs#1409: gazebo_ros_camera: configure projection matrix from sdf
ros2/rclpy#974: Make Optional things Optional
ihasdapie/EngSci_Y2S2#2: Update README.md
ros2/rmw_fastrtps#627: [Service introspection] populate rmw_client_t.writer_guid
ros2/rmw_cyclonedds#399: [Service introspection] populate rmw_client_t.writer_guid
ros2/rmw#325: [Service introspection] add writer_guid to rmw_client_t
ros2/ros2cli#732: [Service Introspection] Support echo verb for ros2 service cli
ros2/rosidl_typesupport#125: [service introspection] Guard `#include <cstddef>` when being included from a `c` source
ros2/rcl_interfaces#141: [service introspection] Add ServiceEvent, ServiceEventInfo, ServiceEventType messages
ros2/rcl#990: Service Introspection
ros2/ros2cli#728: Set multiple parameters
ros2/ros2cli#727: Support setting parameters atomically
ros-infrastructure/rep#360: [REP-2012] Service introspection
ros-infrastructure/rep#359: service introspection rough draft
ros2/demos#566: demo for rclpy parameter_client
ros2/rclpy#959: implement parameter_client
ros2/rclpy#958: Revert "implement parameter_client"
ros2/rclpy#956: fix load_parameter_dict_from_yaml test failure on windows
ros2/rclpy#950: Change sphinx theme to readthedocs
ros-perception/image_common#246: Opt-in to qos overriding for publisher
ros-perception/image_pipeline#752: forward container namespace from stereo_image_proc -> image_proc
ros2/rclpy#947: fix rclpy.shutdown() from hanging when triggered from callback
ros2/ros2cli#716: refactor: make ros2param use rclpy.parameter_client
ros2/rclpy#945: implement parameter_client
ros-simulation/gazebo_ros_pkgs#1396: remove image_common from gazebo_ros_pkgs.repos
ros-simulation/gazebo_ros_pkgs#1395: fix gzserver launch file breaking when no ros args provided
ros2/rosbag2#1018: Reduce message spam when topics to be recorded do not exist
ros-simulation/gazebo_ros_pkgs#1391: Expose launch parameter for `params_file`
ros2/rclpy#919: Update spin_until_complete
ros2/rclpy#599: Composition API
ros2/ros2#1285: Service Introspection   

```






[^spawn]: At least, sort of. We take care of them now, though.






{{< pdf src= "./deck.pdf" >}}


I got [mentioned at roscon 2023!](https://roscon.ros.org/2023/talks/The_State_of_ROS_From_the_Iron_Age_to_the_Jazzy_Age.pdf)












