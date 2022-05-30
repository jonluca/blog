---
title: "Thoughts on user growth and product"
date: 2020-08-29 17:51:20 -0700
---

My day job is, officially, as a Growth Engineer working primarily on Unauth Product at Pinterest. It's slightly different from my previous software engineering roles - typically, in other roles, I would be handed a spec sheet or design and had to implement it. Sometimes I'd design it myself, but the challenges were uniquely _technical_ - I had to build something, and there was creativity in so far as what technologies and design patterns I'd use, but the features and product itself were usually dictated to you. They would either be so obvious that they were trivial, or they'd be handed down by some PM some point above the line.

Working on growth engineering is different - you're responsible for the ideation and product, and focus around a north star metric, and can gauge the success of your ideas _objectively_. You own the entirety of the process, and have a quantifiable number at the end (for unauth and SEO, it's usually traffic, time on site, and, most importantly, user acquisition).

This lends itself to an interesting focus at work every day. You want to build a product that is actually enjoyed and valuable to users, while still trying to "game" their attention and behavior.

The following are some thoughts I've had from working and consulting in growth at startups and companies of various sizes, mostly in the consumer tech space:

## Thoughts on users and product

- Trying to get users to do something is less like being an omnipotent god that tells people what to do than it is reshaping rivers of user intent. You can't control what a user does, merely guide the flow of their actions. Adding a huge button doesn't mean they'll click on it.

- Removing the ability to do something won't prevent them from doing it (and will most likely just increase distaste for your product).

- Users are simultaneously smarter and dumber than you think. Dumber in the sense that, when you take the average level of product comprehension for a user of any site that is used by a significant portion of the world population every day, it's fairly low. Especially when you're focused on new user acquisition, they don't know what to expect, or how to use what you're providing them. At the same time, though, they're **on your site for a reason**, and usually know what they want.

- You need to make sure to put yourself in the same headspace as your users. As someone building a product, you have to remember that you have a significantly higher familiarity with it than the people using it. You'll have specific names for each product feature and know the user flows and reasoning behind each action, but for a lot of the people that visit your site, it's their first time there.

- It's easy for me, as an early 20s San Francisco based software engineer, to have a fairly skewed perception of the world. Remember the user can have every possible demographic and characteristic.

- Make sure you track what your users do when they come to your site, and experiment often with major shifts to your platform. It's incredibly easy to _think_ that users are doing something for a certain reason, when in reality it's baseless.

- Everything comes at a trade-off. Sometimes this is strictly better, metrics wise, but other times the trade-offs aren't as clear - it doesn't mean they don't exist, though. The choices in button ordering, what you put above the fold, the font size, it all pulls and pushes the user experience in different directions.

- Build for everyone, not just the professional. It's easy when building products at work to be in a professional mindset - you're not really thinking about **every** possible aspect that someone could be using your product for. Users get value in ways you never could predict - it's better to build a platform that is flexible and ambiguous than imagine a single purpose use for what you're building.

- You do not and can not control users, and should view yourself more as at their mercy than them at yours. Working on a product is a lot more like swinging your arms around blindly in a room hoping you hit the light switch than it is knowing exactly what people want and how to deliver it to them.

- Question all of your previous learnings. Something might've been true in the past, but is no longer. The same experiment or feature can lead to differences in results based on some slight change in the product or flow.

## Thoughts on growth

- Your user metrics are almost always proxies for what you're trying to measure. You'll pick some north star metric and say that this is what you're building around, but this is just a shadow of what you're trying to measure - the nebulous cloud of "user enjoyment"

- Sometimes building a more aggressive user experience is worth it in the long run. For example: By default, your site could have a 2% conversion rate and a 20% bounce rate. A new feature is introduced behind an experiment that increases the conversion rate to 3%, but increases the bounce rate to 80%. This is clearly a subpar experience - it increases your bounce rate by 400%. However, it also increases your conversion rate by **50%**. Depending on your product this can make sense (for example, anything with an LTV for each user that is really high, or that has a really high CAC). It might not be ideal in the long term, but having a short term lever like this can be instrumental to a product's success.

- User growth is often cyclical. Some products will have the same traffic every day of the year, whereas others will have time of day, day of week, week of month, or seasonal patterns.

- Monitor everything. As a product grows, you'll build out one-off features that are significant wins at the time, but which aren't actively monitored. It's cheap to add a log to something and just page a team when it drops to 0. This is significantly eased by TDD, but TDD is rarely the right answer when your main concern is growth (you should move quickly).

- You should move as quickly as possible. Don't work on an idea for a long time - build out the smallest possible version that gives you directionality (positive or negative for the user metrics you're looking at) and iterate from there. Especially in the early stages of a company, moving slowly and not adapting to shifting market conditions can kill you.

- Growth is product + a direction + fuel. Each of these is a multiplier on the others - any combination of these can make a successful company. The dream is to have a great product that knows exactly where it wants to go, with all the resources it needs, but this is very rarely the case. More often than not you'll have a mediocre product that's floated along for a bit while being severely understaffed. If any of them is 0, you're DOA. There's no pithy truism here - a company can succeed _because_ it has great direction and resources, or it can fail _in spite of it_.

## Success

One of the most important parts of the above is that they're not static. These aren't commandments that are written in stone - they're learnings that are based on trial and error, off of experiments and conversations with users. You'll run an experiment one day that contradicts nearly everything you've learned about growth and product, and you just have to re-baseline yourself and take those learnings forward.

You have a lot of control in so far as what the user sees and has access to - you can never control what they do with it, though. Building something that keeps the experience in mind, and that is focused on long term, sustainable growth is all you can hope to achieve.
