---
title: Old code is institutional knowledge
date: 2018-04-26 07:55:06 -0700
---

For some pretext, I am the maintainer of a medium sized open source project title [Anubis](https://github.com/jonluca/Anubis), a subdomain enumeration tool. In my opinion it's a good example of a medium sized FOSS project - there are a couple hundred daily users, but no large company or organization has it as a dependency. Any major architectural changes need to be well thought out, but they don't require a blog post or advance notice to the community (provided it's not a breaking change). It fits in that niche of projects between "no one uses it" and "any small change needs to have a full discussion on multiple forums between all maintainers". This is just my experience with working and creating the codebase, and about **working** old code effectively becomes institutional knowledge.

#### Reading code is significantly harder than writing it.

Old code is effectively institutional knowledge of that project. While there were a variety of reasons I wanted to make Anubis, one of them was because I thought that previous tools that accomplished the same thing were too convoluted or hard to understand. One of the mistakes I made with Anubis was to effectively rewrite tools that already existed because I thought their codebases were mismanaged or poorly architected. 

When reading old code or trying to understand an unfamiliar codebase there are effectively two pieces of understanding - what the function you look at is *specifically* doing, and how that function plays into the architecture as a *whole*. Often only one of the two will be apparent, and it's easy to dismiss the project as a whole if you don't understand the trade-offs the original maintainer made when designing it. While it's true that *some* projects will be truly mismanaged and have deep recurrent structural problems, the truth is that a lot of projects are hard to understand because reading code is hard. 

As an explicit example, take the following excerpt of code:

```python
for ip in resolved_ips:
    try:
      zone = dns.zone.from_xfr(dns.query.xfr(ip, target))
      for name, node in zone.nodes.items():
        name = str(name)
        if name not in ["@", "*"]:
          zonetransfers.append(name + '.' + target)
    except:
      pass

```

There's one line in particular that couldn't be understood just by reading documentation or exploring the call stack - why it's only appending to `zonetransfers` if the name is not `"@"` or `"*"`. 

That line was added because this specific resource returns wild card domain certificates (*.mydomain.com), which isn't a valid subdomain, and primary naked domain records (@ DNS A record). For a subdomain enumerator, these aren't useful pieces of information, so they're discarded. However, when looking at one of the previously created subdomain enumerators that use this same Python package, they have the same check, and have had it in master for years. What had looked like a poor implementation at first glance turned out to be *institutional knowledge* of the codebase. This specific example could be easy fixed by a short, one line comment explaining what it does, but it's still common enough to encounter this sort of code out in the wild. 

While it's significantly harder to pick up an existing project, the institutional knowledge that comes with it can often be more valuable than the time that would've been saved if you'd just written your own implementation. 