---
title: On USC's CSCI-350 (Operating Systems)
date: 2018-04-23 20:10:25 -0700
---

As a USC CS student, you hear tales about OS - the long nights, the difficult debugging, the memory problems, and other terrifying stories. I was excited to take this course - I was hoping it would be another course like CSCI-104 (Data Structures). I entered 104 not knowing how little I knew about CS, and left both feeling like I learned a lot and as if there was just so much more for me to know. 

I'm fairly disappointed to say that that is *not* what happened. This won't be a diatribe over the class in terms of how it's taught or the professor. I took it with Tatyana Ryutov, and while a little dry at times, I think she did a fine job. 4 hour lectures on Friday afternoon's are just rough. This is more about the actual content of the class, and what has been done to it. 

First, it's been neutered. The original Stanford class has **4** projects that need to be completed in **1** quarter - we, on the other hand, have 2.5 projects (Project 4 (Filesys) was dropped completely, and Project 1 was halved in difficulty). Each assignment now takes between 8 and 12 hours, and is nearly trivial to complete. This is insulting to me, as a student. It's effectively the department saying that we're not capable enough to do the same assignment that other students around the world are, and that parts of it are too difficult. 

Second, there's too many resources. There was a guide written by a CP a couple years ago that is so in depth and accurate that it trivializes the class. The guide itself is amazing - well written, clearly laid out, and with code snippets. It simply walks you through each section of each project, with hints so strong that they lay the entire project out for you. This is even more insulting - OS is supposed to be a class where you're not just digging around in the weeds of C and POSIX guidelines - you're also making architecture decisions, figuring out the most efficient way of implementing each part, and coming up with your processes and methodologies that you'll take on with you after graduation. We're provided so many resources that you basically just follow along with what you're told. It's a plight that, while making the course easier, lowers the quality of the education for each student leaving the curriculum. 

Finally, with the addition of CSCI-356 (Computer Systems), a lot of the issues previous students have had in the class have disappeared. A whole class before hand that explains virtual memory, caching, locks, and assembly takes a lot of the monotonous learning out of OS, and leaves you free to make better decisions. I sincerely hope the department fixes the class now that there is a more robust and cohesive path to 350. 

On another note, for people reading this before taking the class, I'd recommend spending some time getting your environment right. I recommend the following:

* Fix the sources.list in the VM so that it points to the Xenial Archive

* That should allow you to install `openssh-server`, which means you don't need to use Xserver at all

* On your local machine, install CLion (by JetBrains) and get your project set up (generate a CMakeLists and make sure the paths are correct)

* Recompile gdb locally with the `--target` flag, so that you can run gdb on your host OS but debug a linux environment

* Finally, point CLion to your kernel.o, the recompiled gdb, your sysroot, and create the mapping for your mounted folder (probably /media/sf_pintos) and your local folder

Now you should be able to debug it with a real IDE!