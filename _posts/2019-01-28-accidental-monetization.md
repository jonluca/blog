---
title: "Class schedules, a cease and desist from Viacom, and accidental monetization"
date: 2019-01-28 20:57:33 -0700
header-img: "/images/usc-venmo4.png"
---

<style>
    {%  include main.css  %}
</style>

### Background 

In early 2017 I was a Junior at USC, and a recent transfer to Computer Science. I wanted to get some real experience  with software development and engineering, so I decided to challenge myself over spring break - my goal was to build 5 projects in 5 days. Each day I would try out a new framework, language, or format, and try to build something with it.

One of my first projects was building a scraper for [Rate My Professor](http://ratemyprofessor.com). I, like many of my peers, used it quasi-religiously to decide which professors to take (which, in hindsight, was not a very wise decision - some professors are hard but valuable!). I thought it would be interesting to aggregate data and analyze statistics on department, professor, and school. 

I wrote the scraper for it and managed to get all professor data, published the tool to GitHub, and promptly got a Cease & Desist notice from Viacom (RMP's parent company). 

<picture class="centered-image">
  <source srcset="/images/rmp-cd.webp" type="image/webp">
  <source srcset="/images/rmp-cd.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/rmp-cd.png">
</picture>
<p class="footnote">Viacom Cease & Desist</p>

Womp womp. 

I was a little bummed but I let it go. I deleted the repo and moved on to another project. 

### Class Registration

A few months later came USC's class registration time. I was going to be registering for senior classes, and started going through the whole process of cross-checking what professors were available for my classes with their rating on RMP. This was fairly tedious, and it was difficult to remember what each professors rating was and what their students had said about them. I came up with the idea of building a chrome extension that would pull in the data I already had and surreptitiously place the rating next to the professors name. 

<picture class="centered-image">
  <source srcset="/images/uscsh-pre.webp" type="image/webp">
  <source srcset="/images/uscsh-pre.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/uscsh-pre.png">
</picture>
<p class="footnote">Before</p>

<picture class="centered-image">
  <source srcset="/images/uscsh-after.webp" type="image/webp">
  <source srcset="/images/uscsh-after.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/uscsh-after.png">
</picture>
<p class="footnote">After</p>

The numeric rating was also clickable, which took you directly to the professor's page on RMP. The first version was [no more than 80 lines of code](https://github.com/jonluca/USC-Schedule-Helper/tree/7c5674ebe564cf827d6186b1a35bcc4042a90e5e) and got up and running quickly. 

I sent it to a few friends and it blew up. Because it was doing the checks locally (a giant `JSON` object was bundled with the extension that matched professor names with their ID and rating), it was fast, easy to install, and provided immediate benefit to students. It amassed nearly 1,000 users in a week. 

### Building a product

At this point I was surprised - what had started as a personal hobby project had quickly grown to an actual "product" that people were using. I loved the idea of starting my first open source, free project, and really enjoyed giving back to the USC community. 

USC class registration is severly lacking - it's missing core, intuitive features that should have been included in the first version. This list includes class waitlists, telling you whether a give class overlaps your current schedule, telling you when a class is full at a glance, the ability to export your calendar to iCal, and providing a calendar on the actual search page. 

This led to a bad user experience - most students were familiar with having a dozen tabs open, cycling between times and professors and syllabi. 

I got to work adding some straight forward improvements - the classes would be highlighted orange when they conflicted with your current schedule, and red when they were full (and a gradient when both!). I tallied up all the open spots in a class and added them to the header, so you could keep track of all the spots in all the classes for a given department. I added an export button that would export your schedule to iCal. 

This was a huge success - I had over 4,000 people using the extension (about 25% of the undergraduate population), and was getting feedback and feature suggestions fairly often. There was one hiccup with the USC administration but that's a [story for another time.](https://github.com/jonluca/USC-Schedule-Helper/commit/fdc414ab9ffc5f25df857e5be42cc13701bde283#diff-35c80558883c32ba23c8363ca2b3c422R14)

## Open classes

One of the most requested features was the ability to tell when a spot opened up in one of the classes. This was a very different problem - everything so far had been client side. A user would install the extension and that would require no additional work or support from me. To check whether a class was full would require a stateful service. I'd need to know what class, how many spots were open, who requested it, and how to contact them. 

I decided that I might as well build it as it would provide a valuable learning opportunity, and so the [USC-Class-Notifier-API](https://github.com/jonluca/USC-Class-Notifier-API) was born. I slowly started building it out, learning about the [USC API](https://web-app.usc.edu/web/soc/docs/html/), and about deploying my own server (which I wrote a guide for a year later [here!](https://github.com/scopeusc/scope-s18/tree/master/lesson-6)).

This went well, and I added the feature in [late August](https://github.com/jonluca/USC-Schedule-Helper/commit/b77a749c4f67543a3e7d12c6412f5b07936e1200) of that year. 

I got great feedback but I still thought it could be better - the notification system was currently email, which was slower to be noticed than a text message. I wanted to add text notifications, so I turned to twilio. 

This was my first addition that would actually require me to pay for the service. Each text message wasn't expensive, but with 4,000 people using it the charges would rack up. Regardless I thought it would be a valuable addition and so I loaded my account with $20, thinking that that would last me for a couple years. Unfortunately, people chewed through that amount in 3 days.

At this point I had to make a decision - either disable text notifications, or charge people for them. From the onset I meant for this to be a free, open source tool that anyone could use, and I disliked the idea of charging users for this service. 

However, I wasn't about to have this extension actually *cost* me money, so I implemented a quick fix. 

<picture class="centered-image">
  <source srcset="/images/uscsh-venmo.webp" type="image/webp">
  <source srcset="/images/uscsh-venmo.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/uscsh-venmo.png">
</picture>
<p class="footnote">After</p>

"If you want text notifications, venmo @JonLuca $1 with your email in the subject and I'll manually enable them for your account."

I wrote this thinking that a few people might see it and value a text message at $1. 

## Accidental monetization

It costs $0.0075 to send a text message on twilio. This meant that my profit margin was **99.25%**.

I hadn't planned to have a profit margin this high, but it had felt weird picking any number *but* $1.

It was a small enough amount that nobody would really blink twice, and it required the least amount of taps. I also had to value my time - I'd need to manually approve each email address, so $1 felt like a fair price.

This service was so successful that I actually had people venmo me *way* more than what I was charging because they enjoyed it so much.

<picture class="centered-image">
  <source srcset="/images/usc-venmo1.webp" type="image/webp">
  <source srcset="/images/usc-venmo1.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/usc-venmo1.png">
</picture>
<picture class="centered-image">
  <source srcset="/images/usc-venmo2.webp" type="image/webp">
  <source srcset="/images/usc-venmo2.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/usc-venmo2.png">
</picture>
<picture class="centered-image">
  <source srcset="/images/usc-venmo3.webp" type="image/webp">
  <source srcset="/images/usc-venmo3.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/usc-venmo3.png">
</picture>
<picture class="centered-image">
  <source srcset="/images/usc-venmo4.webp" type="image/webp">
  <source srcset="/images/usc-venmo4.png" type="image/jpeg"> 
  <img class="centered-image" src="/images/usc-venmo4.png">
</picture>

This was a weird experience in successful monetization. It's quite rare that it happens *accidentally*, much less in a way that offers insane profit margins.

By the end of my time at USC there were over 6,000 people using the extension, with over 14,000 classes watched and 60,000 email notifications sent.

## Moving forward

As I'm graduating now the extension will become abandonware. It'll keep working until USC changes their site layout or their API. Until then, I hope everyone keeps enjoying it, and if you're interested in taking up development, [hit me up!](https://blog.jonlu.ca/contact)


The USC Schedule Helper is still [available here.](https://chrome.google.com/webstore/detail/usc-schedule-helper/gchplemiinhmilinflepfpmjhmbfnlhk)