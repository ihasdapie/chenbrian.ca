---
title: "Projects"
slug: "projects"
date: 2021-12-13T21:03:35-05:00
draft: false
katex: true
back_to_top: false
toc: false
tags: ['programming', 'projects']
website_carbon: true
aliases:
  - "/posts/2021/projects"
---

// Page under construction //   

> "If you built a project and did not write about it, did you really build a project?"

## Overview
**[Browse projects by tag]({{< ref "/tags/projects" >}})**
- [ROS](https://www.ros.org/): Worked on the open-source Robot Operating System (ROS) as a summer intern in 2022. What was really cool about this experience was that I got to work directly with NASA on their [VIPER](https://www.nasa.gov/viper/) lunar rover project, supporting their use of ROS2 and Gazebo on their simulation, ground control, and autonomy systems.
  - ROS is essentially the [de-facto](http://www.cse.sc.edu/~jokane/agitr/) standard for writing robot software and can be found in Roombas, Boston Dynamic's [spot](http://wiki.ros.org/Robots/Spot), industrial robot arms, and even in [space](https://www.openrobotics.org/blog/2022/2/2/rosinspace)!
  - [Intern Presentation Slides]({{<ref "#osrf-intern-presentation" >}})
  - [Presentation at August 2022 Gazebo Community Meeting](https://youtu.be/3qIYnQmpa1Q?t=2501)
  - [REP2012: Service Introspection](https://github.com/ros-infrastructure/rep/pull/360): Enabling service introspection, i.e. allowing for `ros2 service echo` and `ros2 bag record --services`. This highly requested feature has been absent from ROS since the introduction of ROS services in ~2011 and I'm excited to have been able to help make it a reality. See [meta-ticket](https://github.com/ros2/ros2/issues/1285)
    - Lots of changes to [`rcl`](https://github.com/ros2/rcl/pull/997) core ROS library and [`rosidl`](https://github.com/ros2/rosidl/pull/700) (and [associated libs](https://github.com/ros2/rosidl_typesupport/pull/127)) code generation pipeline plus implementing support in [`rclpy`](https://github.com/ros2/rclpy/pull/988) and [`rclcpp`](https://github.com/ros2/rclcpp/pull/1985) client libraries and adding [tooling](https://github.com/ros2/ros2cli/pull/745)
    - Helped introduce mypy compliance in rclpy, [ParameterClient](https://github.com/ros2/rclpy/pull/959), fixing race conditions in certain edge cases when shutting down an `rclpy` node, lots of miscellaneous maintenance tickets, and improving test coverage
    - Wrote a vim plugin for the [empy](http://www.alcyone.com/software/empy/) templating engine: [ihasdapie/empy.vim](https://github.com/ihasdapie/empy.vim)
- [aUToronto](https://www.autodrive.utoronto.ca/), UofT's self-driving car team: I've been a part of this team since 2020 and in doing so have worn many hats. Here are some of them:
  - Trajectory motion planning lead: designed, implemented, and deployed local trajectory motion planning algorithms to generate kinematically feasible trajectories
  - DLA lead, creating a inference engine to run YOLOv5 in real-time across 4 cameras with NVIDIA [TensorRT](https://github.com/NVIDIA/TensorRT/)
  - Simulation & Testing co-lead, working on automated integration testing & associated ROS/ROS2 tooling Demo [below]({{< ref "#autotest-autoronto">}})
- [GrocerCheck](https://grocercheck.ca/): [`Github`](https://github.com/GrocerCheck/GrocerCheck), [Pitch Deck]({{< ref "#grocercheck-pitch-deck" >}})  A website to help people reduce contact at grocery stores and essential services.  Got some press coverage too!
     - [CBC Piece](https://www.cbc.ca/news/canada/british-columbia/bc-youth-entrepreneurs-covid19-1.5784637)
     - [CBC Piece, but in French](https://ici.radio-canada.ca/nouvelle/1746337/emploi-pandemie-entrepreneuriat-bakd-grocercheck)
     - CBC TV piece can be found [below]({{<ref "#grocercheck-cbc-interview" >}})
     - [Daily Hive](https://dailyhive.com/seattle/new-website-grocercheck-seattle): Toronto, Vancouver, Seattle
     - [Seattle Pi](https://www.seattlepi.com/coronavirus/article/new-website-checks-grocery-store-crowds-capacity-15297891.php)
     - [CBM Press (Korean News)](https://cbmpress.com/bbs/board.php?bo_table=vnews&wr_id=5388&sst=wr_hit&sod=asc&sop=and&page=71)
     - [Salam Vancouver (Iranian News)](https://www.salamvancouver.com/news/vancouver-and-bc-news/grocercheck-%D8%A8%D9%87-%D8%B4%D9%85%D8%A7-%D8%A7%D9%85%DA%A9%D8%A7%D9%86-%D9%85%DB%8C-%D8%AF%D9%87%D8%AF-%D8%AA%D8%A7-%D8%A8%D8%B1-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D9%87%D8%A7%DB%8C/)
     - [Fairchild TV](https://www.fairchildtv.com/): Interview broadcast on national Chinese TV
- [btrnt](https://github.com/btrnt): `"Bot or not"`: A chrome extension that implements [GLTR](http://gltr.io/) to use machine learning to detect and combat AI-generated text. Demo [below]({{< ref "#btrnt" >}}).
- [The Humerus Bot](https://github.com/UTMIST/humerus) A bot that leverages large NLP ML models to play [Cards against Humanity](https://www.cardsagainsthumanity.com/), a popular humor-based card game. Demo [below]({{< ref "#humerus" >}}).
- [gws](https://chenbrian.ca/posts/2021/12/go-web-server/): A simple web server implemented in 111 lines of `go` used for serving my personal website. [`Github`](https://github.com/ihasdapie/gws)
- [dotfiles](https://github.com/ihasdapie/dotfiles): Config files I spend too much time on.
- [LivePopularTimes](https://github.com/GrocerCheck/LivePopularTimes) GrocerCheck backend data collection library
- [bettermotherfuckinghugowebsite](https://github.com/ihasdapie/bettermotherfuckinghugowebsite/) A minimal [hugo](https://gohugo.io) template inspired by [http://bettermotherfuckingwebsite.com/](http://bettermotherfuckingwebsite.com/) -- now with modern conveniences.
- BC Parks Foundation: 'discoverparks' platform currently in public alpha.
- And more!


## Demos:

#### OSRF Intern Presentation
{{< pdf src="osrf_intern_pres.pdf" >}}

#### OSRF Intern Presentation Demo
<iframe width="750" height="500" src="https://www.youtube.com/embed/3qIYnQmpa1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### GrocerCheck CBC Interview
{{< video src="cbc_piece.webm" >}}
The frame rate may be a bit slow because it was a screen recording of TV footage.

#### GrocerCheck Pitch Deck
{{< pdf src="grocercheck_pitch.pdf" >}}



#### aUToTest (aUToronto)
{{< video src="autotest_demo.webm">}}


#### btrnt
{{< video src="btrnt.webm">}}


#### Humerus
{{< video src="humerus_demo.webm" >}}



