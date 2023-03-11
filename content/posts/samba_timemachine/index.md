---
title: "SAMBA file share for time machine"
slug: "Samba_timemachine"
date: 2023-03-10T22:56:58-05:00
draft: true
katex: true
toc: true
tags: []
website_carbon: true
---

Short post.

I wanted to repurpose an old external hard drive into a NAS and do time machine backups on it as well. 
Here's the `smb.conf` I used -- some special stuff needs to be done to make it work with time machine. 
Mostly just adding `fruit:time machine = yes` and the accompanying parameters.

One important thing to note is that your external hard drive _cannot be_ formatted as any `FAT` since it doesn't support extended attributes which SAMBA needs to make time machine work. I used btrfs.

```
[global]
	workgroup = WORKGROUP
	passdb backend = tdbsam
	usershare allow guests = No
	min protocol = SMB2
	ea support = yes
	vfs objects = fruit streams_xattr
	fruit:metadata = stream
	fruit:model = MacSamba
	fruit:posix_rename = yes
	fruit:veto_appledouble = no
	fruit:nfs_aces = no
	fruit:wipe_intentionally_left_blank_rfork = yes
	fruit:delete_empty_adfiles = yes

[nas]
	comment = samba on suse
	valid users = ihasdapie
	path = /PATH/TO/DRIVE/nas
	inherit acls = Yes
	read only = No
	browsable = yes
	writeable = yes
	create mask = 0660
	directory mask = 0770
	browseable = yes

[timemachine]
	comment = Time Machine
	vfs objects = catia fruit streams_xattr
	fruit:time machine = yes
	fruit:time machine max size = 1.0T
	path = /PATH/TO/DRIVE/timemachine
	browseable = yes
	writeable = yes
	case sensitive = true
	default case = lower
```




