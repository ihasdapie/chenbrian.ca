---
title: "aUToronto"
slug: "autoronto"
date: 2022-07-25T01:36:21-07:00
draft: true
katex: true
toc: true
tags: []
website_carbon: true
aliases:
  - "/posts/2022/autoronto"
---


I've done a few things with aUToronto over the years and I figured that I'll start a post detailing them.

So, here they are:


- Deep learning acceleration: Real-time 2D YOLOv5 detection pipeline across multiple cameras using TensorRT.
  - Last-minute 2-stage detection pipeline for traffic signs [^tlight]
- "aUToTest": automated simulation integration test framework for autonomous vehicles, with python, matlab, simulink, docker, ROS/ROS2 [^rosros2] and unreal engine, enabling asynchronous testing which brought developer time spent on QA down to almost zero 
- "aUToNoise": Machine learning - augmented sensor noise modelling for improved Sim2Real transfer using CycleGAN
- Presented work at 2021 [Vector Institute](https://vectorinstitute.ai/) Mobility Symposium \& 2021 UofT Robotics Institute AV workshop
- "ZeusBag": ROS/ROS2 [^rosros2] utility library and command line tool for extracting, filtering, and step-wise replaying [ROSbags](https://wiki.ros.org/Bags).
- Jenkins/GitLab/Proxmox CI/CD for aUToronto.


[^rosros2]: We wrote it for ROS1 first and then ended up having to port it to ROS2 alongside the rest of our codebase about 8 months later.

[^tlight]: The night before the competition we realized that our model wasn't trained on this one specific traffic light that was at the competition
