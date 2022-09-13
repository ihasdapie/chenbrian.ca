---
title: "Retrospective: Internship @ Open Robotics"
slug: "osrf-internship-retrospective"
date: 2022-08-18T01:20:00-07:00
draft: true
katex: true
toc: false
tags: ['robots', 'programming', 'about_me']
website_carbon: true
---


I spent the past summer at [Open Robotics](openrobotics.org/), a non-profit organization that spawned [^spawn] and maintains [ROS, ROS2](https://www.ros.org/) (**R**obot **O**perating **S**ystem) and the [Gazebo](https://gazebosim.org/) simulator.
I worked as a software engineering intern working largely on the ROS2 ecosystem 





Figured you would want it in 3rd person.

Brian Chen is a 3rd year undergrad student at the University of Toronto studying Engineering Science with a major in Electrical and Computer Engineering.
At school he helps lead [aUToronto](https://www.autodrive.utoronto.ca/), UofT's self-driving car team where he tries his best to help a car figure out how to drive themselves in the scary real-life world of roads and intersections filled with pedestrians and inconsistent signage.
Outside of school and work you can find him playing badminton, cooking for his roommates, and spending time with his dog.

This past summer he worked on the VIPER team under the mentorship of Jacob Perron helping maintain the ROS2 and Gazebo systems on which their simulation, ground flight control, and autonomy systems are based.
Aside from maintenance tickets and small feature requests, the major project he worked on this summer was proposing, designing, and implementing [REP2012: Service Introspection](https://github.com/ros-infrastructure/rep/pull/360), a feature that will _finally_ enable (after 10+ years) introspection of ROS2 services, i.e. `ros2 service echo` and `ros2 bag record --services`. 
This was a rather involved feature to implement, necessitating changes from the `rosidl` and `rmw` layers all the way to the client libraries, `rclcpp` and `rclpy`.
He hopes that the new service introspection features and associated tooling will benefit the ROS ecosystem by enabling users to easily integrate and develop ROS2 services and with their robots without having to roll their own methods to look at what a service is doing.


You also mentioned links to PRs, demos, etc.





Here's the output of `gh search prs --involves ihasdapie -L 100` if that is of interest.


ros2/rmw_dds_common                    #63    decrease length of test gids to account for 16 byte rmw_gid_t in tests                                                                     about 6 hours ago
ros2/rmw                               #328   change RMW_GID_STORAGE_SIZE from 24 to 16                                                                                                  about 6 hours ago
ros2/unique_identifier_msgs            #24    Depend on rosidl_core instead of rosidl_defaults                                                                                           about 7 hours ago
ros2/ros2                              #1316  Add repository rosidl_core                                                                                                                 about 7 hours ago
ros2/rosidl_core                       #1     Add generators and runtime configuration packages                                         enhancement                                      about 8 hours ago
ros2/rmw_implementation                #206   Add rmw_get_gid_for_client & tests                                                                                                         about 3 days ago
ros2/rmw_connextdds                    #92    Add rmw_get_gid_for_client impl                                                                                                            about 3 days ago
ros2/rmw_cyclonedds                    #402   Add rmw_get_gid_for_client impl                                                                                                            about 3 days ago
ros2/rmw_fastrtps                      #631   Add rmw_get_gid_for_client impl                                                                                                            about 3 days ago
ros2/rmw                               #327   Add rmw_get_gid_for_client method                                                                                                          about 1 day ago
ros2/rosidl                            #701   Move rosidl_generator_c/cpp tests to a separate package                                                                                    about 7 hours ago
ros2/rosbag2                           #1063  [service introspection] add syntactic sugar for recording services                                                                         about 8 days ago
ros2/ros2cli                           #745   [service introspection] ros2 service echo                                                                                                  about 8 days ago
ros2/rosidl_python                     #178   Service introspection                                                                                                                      about 9 days ago
ros2/rosidl_typesupport_fastrtps       #92    Service introspection                                                                                                                      about 9 days ago
ros2/rosidl_typesupport                #127   Service introspection                                                                                                                      about 8 hours ago
ros2/rclpy                             #988   Service introspection                                                                                                                      about 6 days ago
ros2/rclcpp                            #1985  [service introspection] Add service introspection parameters and clock to service                                                          about 2 days ago
ros2/rcl                               #997   Service Introspection                                                                                                                      about 6 hours ago
ros2/rosidl                            #700   [service introspection] generate service_event messages                                                                                    about 8 hours ago
ros2/rosidl_defaults                   #23    Break rosidl_defaults into rosidl_core and rosidl_defaults                                                                                 about 11 hours ago
ros-visualization/interactive_markers  #97    Make compatible with service introspection                                                                                                 about 9 days ago
ros2/unique_identifier_msgs            #23    depend on rosidl_core_generators for packages required by actions                                                                          about 11 hours ago
ros-simulation/gazebo_ros_pkgs         #1414  Fix console errors and warnings when launching gzserver                                   bug                                              about 14 days ago
ros2/rclcpp                            #1981  [docs] add note about callback lifetime for {on, post}_set_parameter_callback                                                              about 13 hours ago
ros2/rosidl_defaults                   #22    Create package rosidl_core_generators                                                     enhancement                                      about 7 hours ago
ros2/rosidl_dds                        #59    Replace rosidl_cmake imports with rosidl_pycommon                                                                                          about 9 days ago
ros2/rosidl_typesupport_fastrtps       #91    Replace rosidl_cmake imports with rosidl_pycommon                                                                                          about 9 days ago
ros2/rosidl_typesupport                #126   Replace rosidl_cmake imports with rosidl_pycommon                                                                                          about 9 days ago
ros2/rosidl_python                     #177   Replace rosidl_cmake imports with rosidl_pycommon                                                                                          about 9 days ago
ros2/rosidl                            #696   Move rosidl_cmake Python module to a new package rosidl_pycommon                                                                           about 9 days ago
ros2/demos                             #578   Change dependency from 'rosidl_cmake' to 'rosidl_default_generators'                                                                       about 10 days ago
ros2/rosidl                            #695   Fix build export dependencies in C introspection package                                                                                   about 10 days ago
ros2/rcl_interfaces                    #143   Add service_msgs package                                                                                                                   about 8 hours ago
gazebosim/gz-sensors                   #249   use sdf to configure camera projection matrix                                             enhancement, 🏰 citadel, needs upstream release  about 1 day ago
gazebosim/sdformat                     #1088  sdf/camera.sdf: fields for projection matrix                                              enhancement, 🏰 citadel, Gazebo 1️1️             about 22 hours ago
ros-simulation/gazebo_ros_pkgs         #1409  gazebo_ros_camera: configure projection matrix from sdf                                                                                    about 1 day ago
ros2/rclpy                             #974   Fix type annotations                                                                                                                       about 25 days ago
ros2/rmw_fastrtps                      #627   [Service introspection] populate rmw_client_t.writer_guid                                                                                  about 3 days ago
ros2/rmw_cyclonedds                    #399   [Service introspection] populate rmw_client_t.writer_guid                                                                                  about 3 days ago
ros2/rmw                               #325   [Service introspection] add writer_guid to rmw_client_t                                                                                    about 3 days ago
ros2/ros2cli                           #732   [Service Introspection] Support echo verb for ros2 service cli                                                                             about 9 days ago
ros2/rosidl_typesupport                #125   [service introspection] Guard `#include <cstddef>` when being included from a `c` source                                                   about 23 days ago
ros2/rcl_interfaces                    #141   [service introspection] Add ServiceEvent, ServiceEventInfo, ServiceEventType messages                                                      about 22 days ago
ros2/rcl                               #990   Service Introspection                                                                                                                      about 7 days ago
ros2/ros2cli                           #728   Set multiple parameters                                                                                                                    about 18 days ago
ros2/ros2cli                           #727   Support setting parameters atomically                                                                                                      about 21 days ago
ros-infrastructure/rep                 #360   [REP-2012] Service introspection                                                                                                           about 23 days ago
ros-infrastructure/rep                 #359   service introspection rough draft                                                                                                          about 2 months ago
ros2/demos                             #566   demo for rclpy parameter_client                                                                                                            about 9 days ago
ros2/rclpy                             #959   implement parameter_client                                                                                                                 about 1 month ago
ros2/rclpy                             #958   Revert "implement parameter_client"                                                                                                        about 2 months ago
ros2/rclpy                             #956   fix load_parameter_dict_from_yaml test failure on windows                                                                                  about 1 month ago
ros2/rclpy                             #950   Change sphinx theme to readthedocs                                                                                                         about 1 month ago
ros-perception/image_common            #246   Opt-in to qos overriding for publisher                                                                                                     about 2 months ago
ros-perception/image_pipeline          #752   forward container namespace from stereo_image_proc -> image_proc                                                                           about 2 months ago
ros2/rclpy                             #947   fix rclpy.shutdown() from hanging when triggered from callback                                                                             about 2 months ago
ros2/ros2cli                           #716   refactor: make ros2param use rclpy.parameter_client                                                                                        about 27 days ago
ros2/rclpy                             #945   implement parameter_client                                                                                                                 about 2 months ago
ros-simulation/gazebo_ros_pkgs         #1396  remove image_common from gazebo_ros_pkgs.repos                                                                                             about 2 months ago
ros-simulation/gazebo_ros_pkgs         #1395  fix gzserver launch file breaking when no ros args provided                                                                                about 2 months ago
ros2/rosbag2                           #1018  Reduce message spam when topics to be recorded do not exist                                                                                about 2 months ago
ros-simulation/gazebo_ros_pkgs         #1391  Expose launch parameter for `params_file`                                                                                                  about 3 months ago
ros2/rclpy                             #919   Update spin_until_complete                                                                                                                 about 23 days ago






% Or in terms more applicable to the end user, being able to ros2 service echo and ros2 bag record --services.
% He will go over his experience designing and implementing this feature as well as show a demo and how you can integrate this with your nodes.
% Then he’ll talk about the new features that can be made possible by service introspection and a brief retrospective of his internship experience.





[^spawn]: At least, sort of. We take care of them now, though.






{{< pdf src= "./deck.pdf" >}}












