---
title: "Goodreads has a time to first byte of nearly 5 seconds"
date: 2020-04-30 23:45:21 -0700
header-img: "/images/goodreads.png"
---

This is going to be more of a rant than my usual posts, but I think it's worth talking about regardless.

I recently started using good reads - it's a great service that connects directly with your amazon book purchase history and allows you to keep track of what books you've read, provide recommendations, and lets you see what your friends are reading as well.

It's also one of the slowest sites I've ever used. 

{% include image.html footnote="Good Reads TTFB is nearly 5 seconds" file="goodreads" alt="good reads TTFB" %}

With a whopping time-to-first-byte (TTFB) of **5 seconds**, Good Reads has a 25x slower response time than the "upper bound" of 200ms recommended by Google. [^1]

{% include image.html footnote="Next request" file="goodreads2" alt="good reads TTFB" %}

Subsequent requests are also incredibly high - at 2s, it's a noticeable lag to all your actions. 

It's fairly shocking that a site owned by a trillion dollar company (Amazon) with 90 million users[^2] can be *this* non performant.

<video class="centered-image" controls autoplay loop>
    <source src="/images/goodreads.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
<p class="footnote">Good reads initial site load video</p>

This is definitely not due to my current network conditions - I'm on gigabit wifi, with low latency, in San Francisco. It makes the site almost unusable - I wonder how many daily active users they're missing out on due to their performance issues? 
 
###### Footnotes

[^1]: https://developers.google.com/speed/docs/insights/Server
[^2]: https://www.statista.com/statistics/252986/number-of-registered-members-on-goodreadscom/