---
title: "Fun VPN tricks due to Apple owning all of 17.X.X.X"
date: 2021-03-12 11:03:51 -0500
header-img: "/images/apple.png"
---

I worked as a security engineer intern at Apple during the Summer of 2018, on the Threat Intelligence team.

{% include image.html file="apple" alt="Apple" %}

I remember one day I was flying from Cupertino to Austin to meet with my manager, who was based out of Texas. I made a bit of a fun discovery on the plane, due to the way that Apple's VPN was set up.

On the flight, they had options to pay for the full flights wifi for $20, or you could get free messaging. I didn't really need to do any browsing so I opted for the messaging. 

I connected my VPN and all my applications started connecting, and I could browse in Chrome (albeit slowly). I was surprised since this should just be for iMessage traffic.

Apple owns all of the 17.0.0.0/8 IP space. All of its public facing services, servers, and domains are behind some 17.X.X.X IP address. 

It seemed like the airline was just whitelisting any traffic to 17.X.X.X, as they knew that that would be where the iMessage servers would be. Since Apple's VPN was also behind a 17 dot IP address, it got whitelisted traffic as well. 

I used this for the remainder of the summer, as a free way of getting Wi-Fi on jetblue.