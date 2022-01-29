---
title: "Pi Pico on Linux"
slug: "pi-pico-on-linux"
date: 2022-01-27T23:08:10-05:00
draft: true
katex: true
back_to_top: true
tags: []
---


Circuitpython
- install it by copying UF2 file into the drive
- install `circuitpython-stubs` for ide support
- connect to serial port to view `print`s
  - find the appropriate port with `ls /dev/ttyACM*`
  - connect using GNU screen
    - e.x. `screen /dev/ttyACM0 115200`
    - if permissions error, add `sudo`
    - or add yourself to the appropriate group










