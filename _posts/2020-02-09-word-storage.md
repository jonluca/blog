---
title: "How much space would it take to store every word ever said?"
date: 2020-02-09 13:23:47 -0700
header-img: "/images/whale.png"
---

If we tally up every word ever said by any person, throughout history, how much physical storage space would be needed to store a representation of those words? Note that I do not mean unique words - rather, every word, ever said, by anyone. 

## TL;DR

Probably less than your average sized blue whale.

## Facts

First, let's start with the things we know.

* Any written format will most likely be inefficient compared to binary storage. There are extreme cases of information density[^8], but we'll just deal with what the average person could buy on Amazon. We can comfortably fit 1 TB in 15.0×11.0×1.0 mm, or 165 mm<sup>3</sup> space (a [readily available microSD sold by SanDisk](https://www.amazon.com/SanDisk-Extreme-microSD-UHS-I-Adapter/dp/B07PBY4VD5)). We undoubtedly can get even higher amounts of information density, but we can use this as a relatively modern, efficient storage space.

## Almost facts

Next let's look at the "pretty good" guesses. These are estimates, but they're probably pretty accurate. We'll say that our numbers are probably right within one order of magnitude.

* Throughout history, there have been roughly **108,000,000,000** people ever born [^1]. That will serve as our baseline population.

* The average number of days lived by a person in 2019 is 365d * 72y = **26,280**. This is probably a pretty serious overestimate - for most of history, the lifespan was significantly less than 72 years, but it will be useful as an upper bound.

## Wild guesses

Next let's look at rough estimates. These may be off by multiple orders of magnitude, but we'll do our best to get an accurate number, and use the higher estimates when possible.

* The average number of words said by a person in a lifetime is pretty tough, and probably the estimate with the highest variance. A 2007 study[^2] found that people say, on average, 16,000 words per day. There is undoubtedly a lot of unknowns here (language, age, culture, setting the study took place in, etc), but we'll use this as another baseline.

## Converting words to storage 

Using the estimates above, we arrive at roughly 10 billion words said, per person (16,000 per day \* 26,280 days = \~420,480,000). This is going to be an upper bound - this assumes a person speaks 16000 words a day every day their entire lives, including as a baby. 

We can now convert this number into storage costs.

It's easier to calculate character storage than word storage, as characters are more easily directly translated into a unit of informational storage.

The average word length in English is 4.7 characters, while German, one of the longest average word length languages, sits at **11.66**[^3]. We'll use German as our language, to again try and get a reasonable upper bound.

10 billion words, times an average word length of 11.66, gets us \~**4.8** billion individual characters spoken per person per lifetime.

4.8 billion characters multiplied by our previous estimate of roughly 108 billion people ever having lived gives us a grand total of 5.2 * 10<sup>20</sup> characters, or 518 quintillion characters ever said in history.

518 quintillion characters in ASCII is 518 quintillion bytes, or 518 exabytes. We could also use UTF8, but since we assumed the language is German, we'll stick to ASCII. Coincidentally, 518 exabytes is roughly 50% of the estimated annual traffic from mobile devices[^9].

Text also compresses extraordinarily well, but we'll assume no compression for the purposes of this estimation (the Data Compression Ratio[^5] of this body of text would be extraordinary, especially if using an external dictionary). I believe it sort of violates the spirit of the question by allowing compression (any form of compression would most likely get closer to a "unique list of words" ever said, rather than "every word ever said"), but I'll include a bonus at the end taking a look at compression.

## Estimate

At 518 exabytes, we'd need 518 million microSD cards. If the volume of each of those is 163 mm<sup>3</sup>, we'd need roughly 84 billion mm<sup>3</sup>, which is roughly **84 m<sup>3</sup>**.

A blue whale has a volume of roughly 86m<sup>3</sup>, which means we can pretty comfortably fit an upper bound of every word said in human history in your average whale, if each person is a Germanic speaking human that speaks 16000 words per day from age 0 to their eventual 2019-average death at 72.[^4]

{% include image.html footnote="We could fit every word every said inside the volume of a blue whale" file="whale" alt="Blue whale" %}

### Bonus

What if we take text compression into account? First, text compresses extremly well. It's not out of the realm of possibility to see a 10-to-1 compression ration.[^7]

Secondly, the number of words spoken will not follow a normal distribution across all words. A small subset of words will make up a significant portion of all words said - for instance, in English, 10 words make up 25% of all used words[^6]. This will compress extraordinarily well. Obviously, compressing 518  exabytes is no easy feat (new Google interview question, anyone?), but assuming we could do it, we'd get the size down to \~8.4 m<sup>3</sup>, or roughly half the size of a standard freight container. 

{% include image.html footnote="Compressed? Less than half of a freight container" file="freight" alt="freight container" %}


#### Footnotes

[^1]: According to the [Population Reference Bureau](https://www.prb.org/howmanypeoplehaveeverlivedonearth/)

[^2]: From [Science  06 Jul 2007: Vol. 317, Issue 5834, pp. 82 DOI: 10.1126/science.1139940](https://science.sciencemag.org/content/317/5834/82.full)

[^3]: From [Distribution of Word Lengths in Various Languages](http://www.ravi.io/language-word-lengths)

[^4]: This is undoubtedly a severe overestimate, but it shows that it's a very "relatively human" size. If I was a betting man I'd guess something closer to the average child sized bedroom would be a better estimate, especially accounting for the number of people who died young, the speakers of non-lengthy languages like German, and people who never spoke a language at all.

[^5]: [https://en.wikipedia.org/wiki/Data_compression_ratio](https://en.wikipedia.org/wiki/Data_compression_ratio)

[^6]: [https://www.businessinsider.com/zipfs-law-and-the-most-common-words-in-english-2013-10](https://www.businessinsider.com/zipfs-law-and-the-most-common-words-in-english-2013-10)

[^7]: [http://mattmahoney.net/dc/text.html](http://mattmahoney.net/dc/text.html)

[^8]: [https://newatlas.com/worlds-densest-solid-state-memory/55599/](https://newatlas.com/worlds-densest-solid-state-memory/55599/)

[^9]: [https://blogs.cisco.com/sp/the-zettabyte-era-officially-begins-how-much-is-that](https://blogs.cisco.com/sp/the-zettabyte-era-officially-begins-how-much-is-that) and [https://www.cisco.com/c/en/us/solutions/service-provider/visual-networking-index-vni/index.](https://www.cisco.com/c/en/us/solutions/service-provider/visual-networking-index-vni/index.)html#mobile-forecast