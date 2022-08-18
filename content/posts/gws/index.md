---
title: "(g)o (w)eb (s)erver"
date: 2021-12-09T20:48:45-05:00
draft: false
tags: ['projects']
website_carbon: true
aliases:
  - "/posts/2021/gws"
---

Deploying your personal website onto github pages is *so* 2013. 
Why avoid the hassle of self-hosting with a static site generator and server? 
Why not just use something tried and tested by the community?


It's just not as fun ... and I didn't feel like studying for a final one afternoon.

So here's a simple 111-line golang webserver that you can use to deploy your personal website.


There's also some cute `figlet` art

[https://github.com/ihasdapie/gws](https://github.com/ihasdapie/gws).
```
  ,----..              .---.  .--.--.    
 /   /   \            /. ./| /  /    '.  
|   :     :       .--'.  ' ;|  :  /`. /  
.   |  ;. /      /__./ \ : |;  |  |--`   
.   ; /--`   .--'.  '   \' .|  :  ;_     
;   | ;  __ /___/ \ |    ' ' \  \    `.  
|   : |.' .';   \  \;      :  `----.   \ 
.   | '_.' : \   ;  `      |  __ \  \  | 
'   ; : \  |  .   \    .\  ; /  /`--'  / 
'   | '/  .'   \   \   ' \ |'--'.     /  
|   :    /      :   '  |--"   `--'---'   
 \   \ .'        \   \ ;                 
  `---`           '---"                  
(g)o (w)eb (s)erver

Bare-bones GET-only web server in golang for personal static site hosting.

(c) 2021 Brian Chen ihasdapi <at> gmail.com
This is licensed under the 'unlicense' license. See LICENSE for details.
```


Golang's built in `http` package is great, and it does basically all the work for you.


Is it fast? I think so.


Is it scalable? Enough for your personal website


Is it secure? I *hope* so.


My personal site will *soon* be deployed with this ... once I get around to writing out the `Dockerfile` and hiding it behind a `nginx` reverse proxy.



