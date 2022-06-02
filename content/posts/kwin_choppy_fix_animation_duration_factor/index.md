---
title: "PSA: Delete `AnimationDurationFactor` if you have an old installation"
slug: "kwin_choppy_fix"
date: 2022-05-25T01:22:56-07:00
draft: false
katex: false
toc: false
tags: ["programming", "linux"]
website_carbon: true
---


As per title: Delete `AnimationDurationFactor` from `~/.config/kwinrc`  if you have an old installation.
This overrides the default value in kdeglobals and for me caused my animation speed to get stuck at something stupid.

- [source](https://bugs.kde.org/show_bug.cgi?id=431259)

Also, this is entirely anecdotal but it appears to me that setting `KWIN_TRIPLE_BUFFER=0` in `/etc/profile.d/kwin.sh` to disable triple buffering results in smoother behaviour than with it on despite the typical recommendations online.
This may be because my laptop runs a Intel UHD620 and two 4K displays and the puny little integrated graphics card can't keep up with triple buffering.
When using the MX150 on the laptop triple buffering seems to work better.




