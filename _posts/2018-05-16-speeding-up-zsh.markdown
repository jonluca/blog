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

Before we begin, it might be helpful to understand how shells in general start up. Shells are just an executable like any other on your machine - their purpose is to just take user input and behave like an old terminal. They have predefined control sequences, but in general are fairly extensible. The following is from ZSH man pages:

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

This gives a general flow of execution, and where zsh starts. My .zshrc just leads to `source`ing a few other files, which just behaves as if the contents of those files was passed directly into the shell as standard input. 

### Profiling

We can start by profiling raw zsh - it's even faster than raw bash. 

<img src="/images/rawzsh.png">

The first step is to figure out exactly what's taking so long - there are a variety of tools to measure performance, but the most useful will be `zsh`'s native debug tools. 

```bash
zsh -xv
```

This enables `xtrace`ing and `verbose` output. It's not particularly great, though - it does not include timestamps, so we have to eyeball the speed. It's easy to catch a few immediate culprits - for instance, mine hung for at least a second on loading `nvm`. Anything that is a few orders of magnitude slower than the other commands will stick out like a sore thumb. 

### Fixing the problem

I started by playing around with high-level entry points. For instance, disabling `source $ZSH/oh-my-zsh.sh` from my `~/.zshrc` cut my load time down by half, to roughly 1.7 seconds average. I then disabled `nvm` and my times plummeted. I had found the main two culprits of slow load times. 

<img src="/images/zshNoOmzNoNvm.png">

My new average had become only 40 milliseconds. I didn't want to lose the functionality that oh-my-zsh provided, however, so I looked into improving it. 

I started profiling specific subsections of oh-my-zsh like so: 

```bash
  timer=$(($(gdate +%s%N)/1000000))

  # command/source/opt setting you'd like to profile

  now=$(($(gdate +%s%N)/1000000))
  elapsed=$(($now-$timer))
  echo $elapsed":" $plugin
```

I wrapped all the plugin loading and sourcing, and profiled each one.

<img src="/images/profiledfuncs.png">


### Other Notes

Oh-My-Zsh is great and provides a lot of functionality, but it comes at a fairly heavy cost. For instance, if you have the `git` branch/status in your prompt, all it's doing is running `git status` [behind the scenes](https://github.com/bhilburn/powerlevel9k/blob/master/functions/vcs.zsh). In large projects with a heavy git history this can hang for seconds just for it tell you that you have an untracked file. 


### Conclusion

In the future I hope to actually recompile zsh with additional profiling techniques. 