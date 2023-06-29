---
title: "Noticing when an app is only hosted in us-east-1"
date: 2023-06-26 12:26:53 -0400
image: "/images/ping.png"
redirect_from:
- /posts/snappy-internet
---

Every time I leave New York and land back in Europe or in Asia, I can immediately tell which apps have a global presence and which apps only deploy to a single US region. Everything just immediately feels a little slower. The pull to refresh feels a bit sluggish, the preview images take a little longer to load, and even native apps just feel less responsive.

## Floored Latency

The speed of the experience you can offer your users is floored by a few variables, most notably the physical distance from the origin server to where the user is actually sitting.

Us-east-1 (appropriately located right by "Centreville, Virginia") is one of the main data centers run by AWS. If you're a startup (or even quite a few mature companies), you are likely to deploy your application here. If you manage a stateful service, or your architecture doesn't support distributed compute, you are likely to *only* deploy here. If you have users in Sydney, Australia, any network request you  make will need to travel 15,677km to make it there, as the crow flies.

{% include image.html footnote="Distance from Centreville, Virginia to Sydney, Australia" file="va-aus" %}

If you're traveling at:

1) The speed of light

2) as the crow flies

3) with no overhead

then that means that you are *floored* at 104ms of latency for your request.

{% include image.html footnote="Time in takes for the speed of light to travel from us-east-1 to Sydney" file="va-aus-light" %}

And this is assuming no interference, other traffic, or time spent handling the request.

In reality, the ping you'll experience will be worse, at around 215ms (which is a pretty amazing feat in and of itself - all those factors above only double the time it takes to get from Sydney to the eastern US).

{% include image.html footnote="Ping to various cities around the globe" file="ping" alt="screenshot shwing ping to various cities around the globe" %}

And this is just what is added on top of everything else that happens on a request - TLS termination and DNS lookup. The problem gets compounded when you realize many requests are chained - you take a 200ms hit on the first TLS handshake, a 200ms hit on the completion, and then for a webpage many assets are critical resources that are only known about after receiving the HTML.

In aggregate this can add thousands of milliseconds for an average website.

## Realized latency

Having spent so much time trying to optimize web pages and API responses for performance, I've gotten a pretty good internal model for latency. I can't quite tell the difference between a us-east-1 server when I'm in New York versus San Francisco, but I can definitely tell if you've got an instance deployed in `eu-central-1` or not when I'm in Italy, or `ap-east-1` when I'm in Sydney.

Using a global CDN can help get your assets to your users quicker, and most companies by this point are using something like Cloudflare or Vercel, but many still only serve static or cached content this way. Very frequently the origin server will still be a centralized monolith deployed in only one location, or there will only be a single database cluster.

As soon as you land back in the United States and turn of Airplane mode on your phone everything just starts feeling... snappier? A little more fluid? As much as T-Mobile and Verizon would like to take credit for that I don't think theres much more to it than the physical location of the servers and where you are at that moment.
