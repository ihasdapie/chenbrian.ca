---
title: "PSA: If delete `AnimationDurationFactor` if you have an old installation"
slug: "kwin_choppy_fix"
date: 2022-05-25T01:22:56-07:00
draft: false
katex: false
toc: true
tags: ["programming", "linux"]
website_carbon: true
---


As per title: Delete `AnimationDurationFactor` from `~/.config/kwinrc`  if you have an old installation.
This overrides the default value in kdeglobals and for me caused my animation speed to get stuck at something stupid.


[source](https://www.mail-archive.com/kde-bugs-dist@kde.org/msg535255.html)




