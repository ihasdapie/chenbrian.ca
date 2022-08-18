---
title: "Writing a resume with LaTeX"
slug: "latex-resume"
date: 2022-01-21T18:31:20-05:00
draft: false
katex: true
back_to_top: false
tags: ['programming', 'about_me', 'projects']
website_carbon: true
aliases:
  - "/posts/2022/latex-resume"
---




Let's face it -- \\( \LaTeX \\)) is *unequivocally cooler* than Word.
And you want an *unequivocally cool* resume as well.  
So you tried [altacv](https://github.com/liantze/AltaCV), but it always got absolutely chewed up by ATS systems.

And so you *yearned* for a 🌠cool🥶 single-column layout, but you couldn't find one.  

I present: my [fork of altacv](https://github.com/ihasdapie/resume/) with a few 🌟 **revolutionary** 🌟 features.


1. Cut down on icons to improve pdf-to-text conversion
2. Change to a single-column layout
3. `\itag{asdf}` command to draw an inline "tag"
4. `\chref` command for hyperlinks
5. Disabling word wrapping and hyphenation
6. Various changes to `\makecvevent`, etc. to improve pdf-to-text conversion

For an example of the output, see my [about me]({{< ref "/about">}}) page, or the picture below.

> Disclaimer: using this template is not a guarantee that it will help you get a job. Trust me -- I wish it did.


![example](https://raw.githubusercontent.com/ihasdapie/resume/main/resume.png)













