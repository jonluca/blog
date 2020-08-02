---
title: "Reversing Lyft's ride history API"
date: 2020-07-03 16:20:34 -0700
header-img: "/images/switch.png"
---

A couple years back I built [Uber Trip Stat's (now renamed to RideShare Trip Stats after a C&D from Uber)](https://chrome.google.com/webstore/detail/rideshare-trip-stats/kddlnbejbpknoedebeojobofnbdfhpnm?hl=en), because I was interested in how much money I had spent on Uber over the last few years. Luckily Uber's [web portal](http://riders.uber.com/trips) lets you see all your past rides, and it was fairly trivial to reverse the API through Chrome. The Chrome Extension just injects some javascript into the page, makes a few requests to get the entirety of your ride history

Lyft, on the other hand, only lets you see the ride history in their app. Their mobile web portal has a nice "(COMING SOON)" sign next to the ride history tab, implying their web team just hasn't built it out yet.

{% include image.html file="no-lyft-history" alt="Lyfts current mobile web landing page" %}

## BurpSuite

I fired up BurpSuite and got the root CA installed - fortunately, Lyft doesn't do TLS stapling, so I was able to pretty quickly find the route. 

{% include image.html file="lyft-route" alt="Lyfts ride history route" %}

Unfortunately, while nearly every other route uses JSON, this one only returned serialized protobuf responses. 

{% include image.html file="lyft-protobuf" alt="Lyfts protobuf" %}

I tried changing the HTTP `Accept` header from `application/x-protobuf,application/json` to just `application/json` with the hopes that their API supported alternate formats - unfortunately, no luck. 
