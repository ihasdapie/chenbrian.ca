---
title: "Toggling laptop touchsreen on Wayland"
slug: "wayland_toggle_touchscreen"
date: 2022-02-07T15:23:04-05:00
draft: false
katex: false
toc: false
tags: ["programming", "linux"]
website_carbon: true
---

Back when I was still on X11 [^1] , I had this little `bash` script to toggle my touchscreen on/off since I didn't use it all that often except to sign the occasional PDF, and it sucked up power[^2].

[^1]: i.e. before I got an external monitor with a DPI vastly different from that of my laptop's...
[^2]: I'm actually not 100% sure if this will cut power to the device but I hope it does? Probably worthwhile testing. But it *does* disable it.


```bash
#!/usr/bin/bash

# toggles touchscreen on x11-based systems

isOn="$(xinput --list-props 'SYNA2393:00 06CB:19AC' | grep 'Device Enabled')"
isOn="${isOn: -1}"

if [ $isOn -eq 0 ]; then
    xinput set-prop 'SYNA2393:00 06CB:19AC' 'Device Enabled' 1
    echo "Turning touchscreen on!"
else
    xinput set-prop 'SYNA2393:00 06CB:19AC' 'Device Enabled' 0
    echo "Turning Touchscreen off!"
fi
```

Unfortunately it doesn't work on Wayland and there isn't a great drop-in replacement for `xinput` on Wayland; you would either have to mess with `udev` or use this little script I cooked up:


1. Find your device ID. You can do this with `libinput --list-devices` or just `cat /proc/bus/input/devices` and look through the output for the touchscreen. For me (I have a 2018 Matebook X Pro) it's `0018:06CB:19AC.0001`. 

> Example output from `cat /proc/bus/input/devices`

```
...
B: MSC=10

I: Bus=0018 Vendor=06cb Product=19ac Version=0100
N: Name="SYNA2393:00 06CB:19AC"
P: Phys=i2c-SYNA2393:00
S: Sysfs=/devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-6/i2c-SYNA2393:00/0018:06CB:19AC.0001/input/input14
U: Uniq=
H: Handlers=event8 mouse0
B: PROP=2
...
```

2. Run these commands

- **Disabling the device**:  `sudo sh -c "echo '0018:06CB:19AC.0001' > /sys/bus/hid/drivers/hid-multitouch/unbind"`
- **Enabling the device**: `sudo sh -c "echo '0018:06CB:19AC.0001' > /sys/bus/hid/drivers/hid-multitouch/bind"`


Alternatively, make a script to toggle it


```bash
#!/usr/bin/bash
if [ -d "/sys/bus/hid/drivers/hid-multitouch/0018:06CB:19AC.0001" ]; then
  sudo sh -c "echo '0018:06CB:19AC.0001' > /sys/bus/hid/drivers/hid-multitouch/unbind"
  echo "Turning touchscreen off!"
else
  sudo sh -c "echo '0018:06CB:19AC.0001' > /sys/bus/hid/drivers/hid-multitouch/bind"
  echo "Turning Touchscreen on!"
fi
```


> This script should work for toggling other input devices as well! I have these commands `alias`'ed in `~/.zshrc`  
> [source](https://askubuntu.com/questions/927022/how-can-i-disable-touchscreen-while-using-wayland) for how to unbind devices









