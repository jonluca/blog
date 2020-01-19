---
title: "Automation saves mental context switches"
date: 2020-01-18 16:21:31 -0700
header-img: "/images/safeway_added.png"
---

It's a pretty common joke in the programming community that you'll spend a lot more time writing a tool to improve productivity than the amount of time that that tool actually saves you. So much so, in fact that there's actually *two* xckd's on the subject.

<img alt="xkcd" class="centered-image" src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png">
<p class="footnote">https://xkcd.com/1205/</p>

<img alt="xkcd" class="centered-image" src="https://imgs.xkcd.com/comics/automation.png">
<p class="footnote">https://xkcd.com/1319/</p>

However, what this ignores is the actual cost of the context switch associated with the action or problem you're eliminating. 

For instance imagine the fairly common action of switching between a development URL and a production URL for a web developer. You can be working on https://mysite.com and instead and need to switch over to https://dev-env1.mysite-dev.com.

This is an action that takes seconds at most. You move the cursor up, click in, highlight the domain, and replace it with the subdomain and domain of your dev environment.

If you're fast, you don't even use a cursor and instead use `⌘ + L` to select the URL, then use the arrow keys and a shift modifier to select and overwrite the full domain. This takes probably takes between 3 to 5 seconds from start to finish. 

To make this faster, you could spend around an hour writing a chrome extension that automatically switches between the development URL and the production URL at a keystroke. Hit `⌘ + Shift + P` and the URL gets rewritten and toggled betwen prod and dev, and you are navigated to the page (you obviously are a ood enineer and document your code, add tests, and learn best practices for the chrome extension.)


To have this be worth it, in a purely objective amount of time sense, you'd have to do this action:
```
 3,600 seconds (60 minutes) / 4 seconds (on average) = 900 times
 ```

This would only be worth it if you do this action once a day for a little under 3 years. Anything less and the amount of time spent building the tool is greater than the benefits.

The real benefit of automating repetitive tasks like this, though, comes from removin the context switch that comes with the manual action. It's often true that a large investment that doesn't make sense based on total amount of time still has outsized impact due to the lack of context switches. 

Everyone has their 