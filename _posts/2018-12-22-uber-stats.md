---
title: "Uber, statistics, and chrome extension"
date: 2018-12-22 16:39:48 +0100
header-img: "/images/ryanair-flight-prices.png"
---
<style>
    {%  include main.css  %}
</style>

Earlier this week I wanted to see how much I've spent on uber across my roughly 4 years on the platform. I realized there was no easy way to do this. One option would be to go through my bank statements, but I have used a ton of different cards over the years. I could connect all my accounts to a service like Mint and search for it there, but that was time consuming and cumbersome. The goal would be to have a first party solution provided by uber, but no such service exists. 

I started poking around Uber's [rides website](https://riders.uber.com/trips)  and found the route that Uber uses to get their trip information. It was surprisingly rich in data - it provided cost, start and end times, distance, and more. I thought it would be fairly straightforward to create a chrome extension that uses your auth token to get all your info, then processes it and shows you relevant information. 

Using that data I made [UberStats](https://github.com/jonluca/Uber-Trip-Stats), which is live on the Chrome Web Store [here](https://chrome.google.com/webstore/detail/uber-trip-stats/kddlnbejbpknoedebeojobofnbdfhpnm?ref=producthunt).

<img class="centered-image" src="/images/uber.png">
<p class="footnote">Stats (personal info redacted) on my uber history</p>

<img class="centered-image" src="/images/uber-graphs.png">
<p class="footnote">Graphs of months I've taken Ubers</p>

You can get it [here](https://chrome.google.com/webstore/detail/uber-trip-stats/kddlnbejbpknoedebeojobofnbdfhpnm).