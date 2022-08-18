---
title: "Pi Pico on Linux"
slug: "pi-pico-on-linux"
date: 2022-01-27T23:08:10-05:00
draft: false
katex: false
back_to_top: true
tags: ["engsci", "other", "programming"]
website_carbon: true
aliases:
  - "/posts/2022/pi-pico-on-linux"
---

Needed to use a Pi Pico for one of my courses (which mandated circuitpython ... for reasons unknown) and noticed that Adafruit's documentation for using CircuitPython with something that wasn't Mu Editor was not really up to par.

1. Install CircuitPython by copying `.uf2` file into the Pi Pico, which can be done by just plugging it into your computer
2. `python3 -m pip install circuitpython-stubs` to get completions with your LSP of choice
3. Connect to serial port to view `print`s and logging info
  - find the appropriate port with `ls /dev/ttyACM*`
  - connect using GNU `screen` or whatever you like to use
    - e.x. `screen /dev/ttyACM0 115200`
    - If you get a permissions error, add `sudo` or add yourself to the appropriate group










