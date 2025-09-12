---
title: "Who's on Clubhouse, and how fast is it growing?"
date: 2020-07-12 16:09:44 -0700
image: "/images/clubhouse.png"
---

<style>
table {
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
thead th {
    background-color: #333;
    border: solid 1px #DDEEEE;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    text-align: left;
    font-style: normal;
}
tbody td {
    border: solid 1px #DDEEEE;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
}
</style>

Clubhouse is an audio-based social media app, allowing users to join in with group phone calls and discussions with people they follow. Users can dip in and out of these phone calls, known as "rooms" at any time, and choose to either listen in to conversations that are happening or contribute. (c/o The National)[^1]

I recently had a chance to play around with their app, and wanted to try and reverse it. I fired up BurpSuite and installed the root CA on the iPhone, and had access pretty quickly. Fortunately the app didn't try and obfuscate it's API, or even implement any form of certificate stapling, which made querying all the routes pretty straight forward.

## Who's on Clubhouse?

As of 7/12/2020, there are **4943** accounts. The first account was created on 3/17/2020.

## How fast is it growing?

{% include image.html file="clubhouse_growth_rate" alt="Clubhouse Growth Rate" footnote="Clubhouse growth rate, total number of accounts by day" %}

Clubhouse has seen fairly linear growth since April, which implies the founders are trying to keep a pretty standard growth rate, despite an exponential amount of interest.

## How many people are joining per day?

{% include image.html file="clubhouse_accounts_per_day" alt="Clubhouse Growth Rate" footnote="Clubhouse growth rate, new accounts joining per day" %}

| Date       | New Accounts |
| ---------- | ------------ |
| 2020-07-05 | 42           |
| 2020-07-06 | 25           |
| 2020-07-07 | 30           |
| 2020-07-08 | 37           |
| 2020-07-09 | 53           |
| 2020-07-10 | 37           |
| 2020-07-11 | 44           |

For the past week, between 25 and 90 new accounts were joining per day. On average, since March 17th, 40 new accounts have joined per day, although the average for June was \~54. The highest one day join number was 261, on April 18th.

| Month      | Average new accounts per day during month |
| :--------- | ----------------------------------------: |
| 2020-03-31 |                                       5.2 |
| 2020-04-30 |                                      42.6 |
| 2020-05-31 |                                   41.7097 |
| 2020-06-30 |                                   54.6667 |
| 2020-07-31 |                                   42.3333 |

## What are the follower distribution counts?

Most people on Clubhouse have less than 25 followers - 2586 of the 4943 accounts, or \~52% of all users. \~23% of all users have 0 followers.

The distribution of user follower counts follows a fairly typical power law distribution.

{% include image.html file="clubhouse_counts_zero" alt="Clubhouse follower count distribution" footnote="Clubhouse follower count distribution" %}

Removing the 0 follower count users for visibility, the graph looks like this:

{% include image.html file="clubhouse_counts" alt="Clubhouse follower count distribution" footnote="Clubhouse follower count distribution without the 0 follower count column" %}

## Who are the most followed people on Clubhouse?

Unsurprisingly the top two users are the founders. After that, a list of partners at various VC firms, founders, and twitter personas make the list. Here are the Top 25, and their respective handles.

| Name               | Twitter Handle | Number of followers |
| :----------------- | :------------- | ------------------: |
| Paul Davison       | pdavison       |                3402 |
| Rohan Seth         | rohanseth      |                3367 |
| Andrew Chen        | andrewchen     |                3125 |
| Naval              |                |                3110 |
| Josh Elman         | joshelman      |                3034 |
| Katie Stanton      | KatieS         |                3032 |
| Sarah Tavel        | sarahtavel     |                3030 |
| Elad Gil           |                |                3019 |
| Erik Torenberg     | eriktorenberg  |                3004 |
| Alexis Ohanian     | alexisohanian  |                2991 |
| Sahil Lavingia     | shl            |                2989 |
| Jessica Verrilli   | jess           |                2983 |
| Jana Messerschmidt | janamal        |                2973 |
| Kim-Mai Cutler     | kimmaicutler   |                2972 |
| Merci Grace        | merci          |                2943 |
| Sam Altman         |                |                2934 |
| balajis            |                |                2908 |
| Nathan Baschez     | nbashaw        |                2904 |
| bubba              | bubba          |                2831 |
| Garry Tan 🍔       | garrytan       |                2737 |
| Josh Constine      | JoshConstine   |                2710 |
| Nate Bosshard 🔭   | natebosshard   |                2671 |
| Jonathan Gheller   | jgheller       |                2667 |
| Brianne Kimmel     | briannekimmel  |                2667 |
| Jared Leto         | JaredLeto      |                2638 |

## Are you a VC reading this?

While I'm not raising right now, a few friends are working on some pretty interesting companies that _are_ currently raising. If you found the above interesting, reach out and I'll put you in contact with like-minded people.

[^1]: https://www.thenational.ae/arts-culture/what-is-clubhouse-the-invite-only-social-media-app-used-by-a-list-stars-including-deepak-chopra-and-ashton-kutcher-1.1030092
