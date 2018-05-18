---
title: Speeding up zsh
date:  2018-05-16 11:43:26
---

A while back I was checking out my shell, and realized that it took a few seconds to load. I timed my shell with ```for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done``` and saw some worrisome results. Raw `bash` was unbelievably fast - it averaged 0.03 seconds, with about 0.02 in user-land and 0.01 in kernel. This is with an empty .bashrc and other dotfiles, so it would prove to be a lower bound/goal.

<img src="https://i.imgur.com/CwAr2ja.png">

My zsh setup at the time fared considerably worse. 

<img src="https://i.imgur.com/GrCS1yL.png">

I was averaging 2.83 seconds, with 1.54 in user-land and 1.29 in kernel-land. 

My zsh set up was nearly 10 times slower than raw bash. I wanted to investigate what was going on, and why it was so much slower. 

### Profiling