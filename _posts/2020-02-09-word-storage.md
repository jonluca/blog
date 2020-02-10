---
title: "How much space would it take to store every word ever said?"
date: 2020-02-09 13:23:47 -0700
header-img: "/images/olympic.png"
---

If we tally up every word ever said by a person, throughout history, how much physical space would be needed to store a representation of those words? Note that I do not mean unique words - rather, every word, ever said, by anyone. 

## TL;DR

Probably less than an olympic sized swimming pool.

## Facts

First, let's start with the things we know. 

* We can comfortably fit 1 TB in 15.0×11.0×1.0 mm, or 165 mm<sup>3</sup> space (a [readily available microSD sold by SanDisk](https://www.amazon.com/SanDisk-Extreme-microSD-UHS-I-Adapter/dp/B07PBY4VD5)). We undoubtedly can get even higher amounts of information density, but we can use this as a relatively modern, efficient storage space.

## Almost facts

Next let's look at the "pretty good" guesses. These are estimates, but they're probably pretty accurate. We'll say that our numbers are probably right within one order of magnitude.

* Throughout history, there have been roughly **108,000,000,000** people ever born [^1]. That will serve as our baseline population.

* The average number of days lived by a person can be said to be 24h * 365d * 72y = **~630,000**. This is probably a pretty serious overestimate - for most of history, the lifespan was significantly less than 72 years, but it will be useful as an upperbound.

## Wild guesses

Next let's look at rough estimates. These may be off by multiple orders of magnitude, but we'll do our best to get an accurate number, and use the higher estimates when possible.

* The average number of words said by a person in a lifetime is pretty tough, and probably the estimate with the highest variance. A 2007 study[^2] found that people say, on average, 16,000 words per day. There is undoubtedly a lot of unknowns here (language, age, culture, setting the study took place in, etc), but we'll use this as another baseline.

## Converting words to storage 

Using the estimates above, we arrive at roughly 10 billion words said, per person, as an upper bound (16,000 per day \* 630,000 days = \~10,000,000,000). This is also going to be an upperbound - this assumes a person speaks 16000 words a day every day their entire lives, including as a baby. 

We can now convert this number into storage costs.

It's easier to calculate character storage than word storage, as characters are more easily directly translated into a unit of informational storage.

The average word length in English is 4.7 characters, while German, one of the longest average word length languages, sits at **11.66**[^3]. We'll use German as our language, to again try and get a reasonable upper bound.

10 billion words, times an average word length of 11.66, gets us 116.6 billion individual characters spoken per person per lifetime.

116.6 billion characters multiplied by our previous estimate of roughly 108 billion people ever having lived gives us a grand total of 1.25928 * 10<sup>22</sup> characters, or 12.6 sextillion characters ever said in history.

12.6 sextillion characters in ASCII is 12.6 sextillion bytes, or 12.6 billion terabytes. We could also use UTF8, but since we assumed the language is German, we'll stick to ASCII.

## Estimate

At 12.6 billion terabytes, we'd need that many microSD cards. If the volume of each of those is 163 mm<sup>3</sup>, we'd need roughly 2 trillion mm<sup>3</sup> (12.6 * 10<sup>9</sup> * 163mm<sup>3</sup>), which is roughly **2054 m<sup>3</sup>**.

An olympic swimming pool holds 2,500 m<sup>3</sup>, which means we can comfortably fit an upper bound of every word said in human history in your average gym pool, if each person is a Germanic speaking human that speaks 16000 words per day from age 0 to their eventual 2019-average death at 72.

{% include image.html footnote="Olympic size swimming pool" file="olympic" alt="olympic sized swimming pool" %}

#### Footnotes

[^1]: According to the [Population Reference Bureau](https://www.prb.org/howmanypeoplehaveeverlivedonearth/)

[^2]: From [Science  06 Jul 2007: Vol. 317, Issue 5834, pp. 82 DOI: 10.1126/science.1139940](https://science.sciencemag.org/content/317/5834/82.full)

[^3]: From [Distribution of Word Lengths in Various Languages](http://www.ravi.io/language-word-lengths)

