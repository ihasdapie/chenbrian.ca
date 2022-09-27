---
title: "chenbrian/about"
date: "2021-10-20"
draft: false
katex: true
tags: ['about_me']
back_to_top: false
website_carbon: true
---


## What am I up to right now?

- Just wrapped an SWE internship @ [Open Source Robotics Foundation](https://www.openrobotics.org/), which was pretty cool because I got to work on ROS2 and Gazebo -- robotics libraries I deal with everyday at aUToronto.
My main project was working on [REP2012: Service Introspection](https://github.com/ros-infrastructure/rep/pull/360), which is a standards-track REP & accompanying reference implementation which will -- after ~11 years -- finally let users run things like `ros2 service echo` or `ros2 bag record --services`[^clear]. I'm looking forwards to this feature being available for everyone in [ROS2 Iron Irwini](https://docs.ros.org/en/humble/Releases/Release-Iron-Irwini.html)

[^clear]: For those who don't do robotics, here's a [TLDR](https://www.merriam-webster.com/dictionary/TL%3BDR). ROS is a way for different robots to talk to each other. One way they can talk over ROS is through a [publisher-subscriber](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) model. Another way that they can communicate in ROS is via a [service-client](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) model. There exists support for recording pub-sub interactions and _introspecting_ them, but not for services -- which is what REP2012 proposes and implements. I'm excited about this because it's a huge quality of life improvement for anyone using ROS2 services and it's really a core piece of functionality that has somehow been overlooked prior.

- Trajectory motion planning sub-team lead @ [aUToronto](https://www.autodrive.utoronto.ca/): This year I'm working on trajectory motion planning for our vehicles. In previous years I've led sub-teams for automated testing & evaluation of autonomous vehicles, deep learning acceleration with TensorRT, CI/CD, simulation, and more!
- [TA]({{< ref "posts/teaching" >}})-ing intro programming (ESC180) and data structures & algorithms (ESC190)
- [Obsessively making pretty notes in \\( \LaTeX \\)]({{< ref "tags/notes" >}})
- Trying to make it through university!


## Cool things I worked on in the past
- Research @ [ISML](https://www.eecg.utoronto.ca/~roman/): I work with accelerating machine learning tasks on memristor crossbars -- first author paper under review
- Web dev & data collection for [BC Parks Foundation](https://bcparksfoundation.ca/): currently in private beta
- Helping people shop for groceries more safely during COVID-19 with [grocercheck.ca](https://grocercheck.ca/)
- [And more]({{< ref "posts/projects" >}})


> For more details, see my [projects page]({{< ref "posts/projects" >}}) or [contact me]({{< ref "#connect-with-me" >}})


## Resume
{{< pdf src= "../resume.pdf" >}}

<details>
  <summary>View as image</summary>
  <img src="{{<baseurl>}}/resume.png" alt="Resume" style="width:100%">
</details>

If the PDF preview doesn't work for you, you may download it instead by clicking on [this link]({{<baseurl>}}/resume.pdf).


![](https://ghchart.rshah.org/ihasdapie)
> My GitHub contributions graph



##  Connect with me:


- [Check out my projects on Github](https://github.com/ihasdapie)
- [Connect with me on LinkedIn](https://linkedin.com/in/brianchen28914)
- [Check out my cooking instagram](https://instagram.com/brianschicken)
- Email at `brianchen.chen (at) mail.utoronto.ca`



## Misc

> Q: How can you tell if someone uses Linux?  
> A: They'll tell you.

I'm currently on Manjaro! [^1]

[^1]: Been meaning to switch to vanilla Arch for _years_ but my current setup 1) works and 2) isn't broken yet. Maybe when I get a new machine.

> Q: How can you tell if a programmer uses Vim?  
> A: You guessed it -- they'll tell you.

Excuse me, I use [nvim](https://github.com/ihasdapie/dotfiles).



