---
title:  "Information and Economies of Scale"
date:   2018-04-16 09:52:00 -0700
---

I was recently in a discussion about the propagation of information, and how our intuitions about the general level of exposure of things we might take for granted within society is wrong. I wanted to wrap my head around a few key notions of our perception of the world and it's changes in the last 3 decades.

## Exponentiation 

Understanding economies of scale does not come naturally for humans. It's often hard to think of the actual differences between an order of magnitude. You can, of course, do the math, but it's hard to grasp the size of exponentiation. It might be intuitive a couple orders of magnitude up and down, but any more than that and our intuitions get skewed.

#### The difference in orders of magnitude between the radius of an electron and the size of the known universe is 44 ($$ 10^{-18} $$ and $$ 10^{26} $$ respectively)

Let's use a few examples to wrap our heads around this. The now-famous video *Powers of 10*, published in 1977, is a great way to start thinking in powers of 10.

<iframe alt="Powers of 10" width="638" height="478" src="https://www.youtube.com/embed/0fKBhvDjuy0" frameborder="0"> </iframe>

Size is a great introduction because it's easy to visualize. Things get a bit difficult when you think about abstract things like time. 

$$ 10^3 $$ (1 Thousand) seconds is 16 minutes.

$$ 10^6 $$ (1 Million) seconds is 11 days.

$$ 10^9 $$ (1 Billion) seconds is 31 years.

The topic becomes especially unintuitive when we get to information. What does it mean, from a sociological perspective, for a viral video to have been seen 10,000 times? What's the difference between 10,000 and 100,000? How can we model this, and what it means for an order of magnitude (or a couple!) more people to have access to information? 

## Information 

Which brings me to the main topic of this blog post - Information, and it's propagation within society. Information can be viewed as arbitrary data such as ideologies, facts, and discoveries, as flow through a [directed graph](https://en.wikipedia.org/wiki/Directed_graph). 

<p class="caption">
<img class="centered-image" src="/images/graph.svg" width="200"/>
<i>Image credit Wikimedia</i>
</p>

Each node can represent any arbitrary container of information - from a sociological view, the smallest scale would be each node being a person, and each edge being the transfer of that information from one person to another. A larger interpretation would be each node being a civilization and time period, and each edge represents the collective information shared by that collection of humans being passed on to the next. Of course, in this larger interpretation it would look much more like a tree than a random graph, but the point still stands. 

<div class="graph" id="cy"></div>

The above would be a pretty good approximation for a small group of friends. People talk between each other quite a bit, and have a pretty consistent group of people they normally interact with. A few of these people bridge the gap between friend groups, and can introduce ideas to each other. 

This view helps show how the information spread, but it does a poor job of illustrating the scale and speed. It's only with an added dimension, time, that this becomes an accurate representation of information and virality. 

<div class="graph" id="cyTime"></div>


<p class="caption">
<button onClick="animateBFS()" class="bttn-fill bttn-md">Start Animation</button>
</p>

Using this model we can see the the scales and periods of information growth. All arbitrary information will have an end point - a time in which that information can be considered lost, dead, or waiting for rediscovery. In times of yore, information used to be an extremely fragile system - it was usually clustered around the same few nodes, with it rarely escaping, regardless of your interpretation of the nodes. You'd get the occasional jump from one cluster to the other, which would quickly infect the cluster, but it would again wait a while. 

Our modern informational framework has data persist significantly longer - so much so that an adage has come out, "nothing is ever deleted on the internet". 

## The Information Age

These models of information don't make any implications on their own, but they do highlight an interesting trend. Within the last 3 decades, the propagation of information has lost a lot of the physical boundaries it used to have. Absolute physical distance is rendered meaningless with the advent of the Internet. Censorship becomes nigh on impossible, so government prohibition only works in the most extreme of cases. Language and translation is getting better every day, with just this year Google Translate averaging better BLEU scores than UN translators on certain languages. 

<script src="/js/cytoscape.js"></script>
<script src="/js/graph.js"></script>