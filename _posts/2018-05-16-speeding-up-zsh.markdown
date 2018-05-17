---
title: Speeding up zsh
date:  2018-05-16 11:43:26
---

A while back I was checking out my shell, and realized that it took a few seconds to load. I timed my shell with `for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done` and saw some worrisome results.

Raw `bash` was unbelievably fast.

<img src="https://i.imgur.com/CwAr2ja.png">