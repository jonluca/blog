---
title: Speeding up zsh
date: 2018-05-16 11:43:26
---

A while back I was checking out my shell, and realized that it took a few seconds to load. I timed my shell with 

```bash
for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done
``` 

and saw some worrisome results. Raw `bash` was unbelievably fast - it averaged 0.03 seconds, with about 0.02 in user-land and 0.01 in kernel. This is with an empty .bashrc and other dotfiles, so it would prove to be a lower bound/goal.

<img src="/images/rawbash.png">

My zsh setup at the time fared considerably worse. 

<img src="/images/origzsh.png">

I was averaging 2.83 seconds, with 1.54 in user-land and 1.29 in kernel-land. 

My zsh set up was nearly 10 times slower than raw bash. I wanted to investigate what was going on, and why it was so much slower. 


### Intro

Before we begin, it might be helpful to understand how shells in general start up. Shells are just an executable like any other program on your machine - their purpose is to just take user input and behave like an old terminal. They have predefined control sequences, but in general are fairly extensible. The following is from ZSH man pages:

<i>Commands are first read from /etc/zshenv; this cannot be overridden. ... Commands are then read from $ZDOTDIR/.zshenv. If the shell is a login shell, commands are read from /etc/zprofile and then $ZDOTDIR/.zprofile. Then, if the shell is interactive, commands are read from /etc/zshrc and then $ZDOT-DIR/.zshrc. Finally, if the shell is a login shell, /etc/zlogin and $ZDOTDIR/.zlogin are read.</i>

<i>When a login shell exits, the files $ZDOTDIR/.zlogout and then /etc/zlogout are read.</i>

The following files are read:

```
$ZDOTDIR/.zshenv
$ZDOTDIR/.zprofile
$ZDOTDIR/.zshrc
$ZDOTDIR/.zlogin
$ZDOTDIR/.zlogout
${TMPPREFIX}*   (default is /tmp/zsh*)
/etc/zshenv
/etc/zprofile
/etc/zshrc
/etc/zlogin
/etc/zlogout    (installation-specific - /etc is the default)
```


### Profiling

The first step is to figure out exactly what's taking so long - there are a variety of tools to measure performance, but the most useful will be `zsh`'s native debug tools. 

```bash
zsh -xv
```
