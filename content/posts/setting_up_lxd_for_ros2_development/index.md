---
title: "`LXD`, Arch Linux, ROS 2, and Wayland"
slug: lxd_arch_ros2_wayland
date: 2022-05-18T17:05:30-07:00
draft: false
katex: true
toc: true
tags: []
website_carbon: true
aliases:
  - "/posts/2022/lxd_arch_ros2_wayland"
---

Rationale: I started my internship at [Open Robotics](https://openrobotics.org/) and I needed to get a development environment set up on my laptop and could not be arsed to set up an ubuntu partition (and I'm a little too bound to my current rat's nest of config files).
So, like any other rational being, I invested twice the time and effort than it would've taken to get an ubuntu partition running into using [LXD](https://linuxcontainers.org/) to fire up something that would compile `ROS 2` [^1].
[^1]: with plenty of help from [Steven!](http://www.nuclearsandwich.com)


## Initial Setup

There are many resources out there for getting `lxd` going. 
The general steps for me were:

1. `yay -S lxd`
    - [Don't use snaps](https://news.ycombinator.com/item?id=24383341)
2. `sudo lxd init`
    - Just follow the prompts, the default values are fine
3. Create a container with `lxc launch ubuntu:22.04 <container_name>`
    - This will create a new container with the name `<container_name>`
    - The container will be running Ubuntu 22.04 or whatever you want.
4. Enter the system: `lxc exec <container_name> -- sudo --login --user ubuntu`

> I think you may need to use `-- su` instead of `-- sudo` depending on your lxd version


## Mount a directory
It is also useful to mount a directory and share it with your host
machine. This way you can use your host editors while building/running
in the container.

`lxc config device add osrf osrf disk source=/home/ihasdapie/osrf path=/home/ihasdapie/osrf`

In my case I wanted to keep paths consistent between my container and its host, so I just renamed the default 'ubuntu' user to 'ihasdapie'. The following command from [stackoverflow](https://unix.stackexchange.com/questions/98461/proper-way-of-changing-username-in-ubuntu-or-any-linux) will change the name, group, home directory, and ownership over appropriately.

``` bash
 usermod -d /home/ihasdapie -m -g ihasdapie -l ihasdapie ubuntu
```

The directory can then be mounted with the following command:

``` bash
 lxc config device add <container_name> <device_name> disk source=/path/in/host path=/path/in/container
```

## Fix permissions
Some user/group id black magick must be performed in order for file access to be seamless between the container and host.
It is also a good idea to make the containers [unpriviledged](https://wiki.archlinux.org/title/Linux_Containers#Enable_support_to_run_unprivileged_containers_(optional))

1. Setting `/etc/subgid`, `/etc/subuid` 

These config files are of format `<user>:<id>:<count>` and lay out what sub{u,g}ids are available.
See `subuid(5)`, `subgid(5)` for more.


Create or edit your files to resemble the following. 
Or if you have a different setup...you probably already know what you're doing so just map it out however makes sense for your system.


``` conf
# /etc/subgid
root:100000:65536
ihasdapie:100000:65536
ihasdapie:0:65536
root:0:65536
```

``` conf
# /etc/subuid
root:100000:65536
ihasdapie:100000:65536
ihasdapie:0:65536
root:0:65536
```


Sometimes things aren't recognized, especially with the user ids. 
A reboot of the host system usually triggers the recognition.

2. `/etc/lxc/default.conf`, `~/.config/lxc/default.conf`

These config entries tell `lxc` to map the subordinate ids inside the container to the host ids we delegated in `/etc/{u,g}id`.

I had the same entries for both.

``` conf
# /etc/lxc/default.conf AND ~/.config/lxc/default.conf
lxc.idmap = u 0 100000 65565
lxc.idmap = g 0 100000 65565
lxc.net.0.type = empty
```


In order for the permissions to work out you have to make the `{u,g}id`
s match up between the container and the host. This can be accomplished
with

`lxc config set osrf raw.idmap "both 1000 1000"`

That is, assuming that your host `uid` and `gid` are both `1000` and the
same goes for the user in the container. If not then you would have to
modify that command a little bit. Alternatively, just use
`lxc config edit container`

> If your user inside the container does not have the correct uid/gid then file access will not work properly. The easiest way to do this is with some `usermod`/`groupmod` commands to change their `gid` and `uid`. See [this link](https://www.cyberciti.biz/faq/linux-change-user-group-uid-gid-for-all-owned-files/)


In any case with this done you should be able to seamlessly work on a
directory inside and out of the container.


## Networking

Depending on your host system firewall you may not be able to connect to the internet in your container. 
You can either 1) disable it or 2) add some more firewall rules! See [this](https://linuxcontainers.org/lxd/docs/master/howto/network_bridge_firewalld/) for an explanation for how to make it work with `firewalld`


## Sharing host X11, Wayland
I chose to share my host Wayland and XWayland server with the container. 
What this entailed was the sharing of a few `unix` sockets.


1. Make sure you have `weston` and `xorg-wayland` installed on your host system. And your container should have `xorg` installed [^b] 
[^b]: It took me embarrassingly long to debug this
2. Add your GPU to the container
    ```yml
    devices:
      mygpu:
        type: gpu
    ```
3. Look for where your wayland and xwayland sockets are. You will also need your host's `Xauthority` file, which is usually located at `~/.Xauthority`. 
In my case I screwed with it a little much and the file is in `/run/user/1000/xauth_<random_chars_here>`. 
    - For me they were in `/run/user/1000/wayland-0` and `/tmp/.X11-unix/X1`
4. Add these to your container. Here I link them to the container and then symlink it to the desired location. 
``` conf
devices:
  Waylandsocket:
    bind: container
    connect: unix:/run/user/1000/wayland-0
    gid: "1000"
    listen: unix:/mnt/wayland1/wayland-0
    mode: "0777"
    security.gid: "1000"
    security.uid: "1000"
    type: proxy
    uid: "1000"
  XWaylandsocket:
    bind: container
    connect: unix:/tmp/.X11-unix/X1
    gid: "1000"
    listen: unix:/mnt/wayland1/X1
    mode: "0777"
    security.gid: "1000"
    security.uid: "1000"
    type: proxy
    uid: "1000"
  Xauthority:
    path: /home/ihasdapie/.Xauthority
    source: /run/user/1000/xauth_ArLdtf
    type: disk
```

> If you find an error with "cannot connect to `/mnt/wayland1/wayland-0`" you may have to `mkdir /mnt/wayland1` in the container

The downside of this is that the symlinks don't persist after the container restarts. 
I just check for it in my `~/.zprofile`.

5. Set some environment variables

I put these into the `~/.zprofile` inside the container. You can do the same with your `~/.profile` or however you choose to handle environment variables. I think `lxc` provides some tools to set them in the `lxc` config for the container.


```bash 
  export WAYLAND_DISPLAY=wayland-0
  export XDG_RUNTIME_DIR=/run/user/1000
  export DISPLAY=:1
  export XSOCKET=/tmp/.X11-unix/X1
  
  
  [[ ! -d /run/user/1000 ]] && mkdir /run/user/1000
  [[ ! -L /run/user/1000/wayland-0 ]] && ln -s /mnt/wayland1/wayland-0 /run/user/1000/wayland-0
  [[ ! -d /tmp/.X11-unix/ ]] && mkdir /tmp/.X11-unix/
  [[ ! -L /tmp/.X11-unix/X1 ]] && ln -s /mnt/wayland1/X1 /tmp/.X11-unix/X1
```




6. Enjoy!
You should now be able to run `xclock` or `rviz` or any gui application and find it working.


## ROS
As for `ROS`, steps to get started working with `ROS` development are
the same as anywhere else. See [this](https://docs.ros.org/en/rolling/index.html).

My workflow typically involves using the container for compiling and testing and editing from my host machine.
For more, see [this post]({{< ref "posts/ros2_terminal_workflow"  >}})





## Summary & Misc

A few useful things:

1. Make a bash function for changing the terminal theme while inside the container.
With kitty it looks something like this:

```bash
los () {
    kitty @set-colors ~/.config/kitty/kitty-themes/themes/Argonaut.conf
    lxc exec osrf -- sudo --login --user ihasdapie
    kitty @set-colors ~/.config/kitty/kitty-themes/themes/kanagawa.conf
}
```
> Not the best way to do this but it works.


## Resources
- [Passing X11, Wayland](https://discuss.linuxcontainers.org/t/howto-use-the-hosts-wayland-and-xwayland-servers-inside-containers/8765)
- [Audio Passthrough](https://discuss.linuxcontainers.org/t/audio-via-pulseaudio-inside-container/8768) [^a] 
- [LXC ROS Workflow](https://artivis.github.io/post/2020/lxc/)

[^a]: I don't have this working yet























