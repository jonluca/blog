---
title: "Unlimited free WiFi on flights with T-Mobile"
date: 2020-11-29 07:12:29 -0500
header-img: "/images/private-address.png"
---

T-mobile offers free wifi on flights by putting in your phone number. You get an hour of free regular browsing, before being kicked back to the unlimited free messaging tier.

You can get unlimited free wifi if you know multiple t-mobile phone numbers.

It doesn't seem like they do any form of verification if a phone number is actually yours or not. Additionally, they try all the normal authentication forms for detecting a duplicate session, but you can bypass these fairly easily.

1. Rotate your mac address. On a mac, you can do this with `sudo ifconfig en0 ether ff:ff:ff:ff:ff:ff`, where the final hex is whatever you want it to be.
2. Clear your cookies and session for the `.gogoinflight.com` domain. You can also just use incognito mode.

That's it! When the `captive.gogoinflight.com` comes up, you can just put any t-mobile number and it'll work. You can only do it once per number per flight, but it's usually pretty straightforward. My whole family uses t-mobile, so that guarantees at least 4 free hours.

The only negative here is that it'll only work on devices that allow you to set your own mac address.

However, in iOS 14, Apple introduced a cool new feature called "Private Address".

{% include image.html file="private-address" alt="Screenshot of a WiFi settings page on iOS 14" %}

This generates a random mac address for a network you connect to. You can only do this twice - once with the private network, and once with your actual hardware mac address, but it's still double the amount! This new feature has come in handy quite a bit as a security researcher.
