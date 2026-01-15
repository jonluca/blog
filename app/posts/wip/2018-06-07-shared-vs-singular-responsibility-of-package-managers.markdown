---
title: "Designing Good Package Managers: A Brief History"
date: 2018-06-07 08:50:23
---

At [JSConf EU 2018](https://www.youtube.com/watch?v=M3BM9TB-8yA), day Ryan Dahl (the original creator of Node.js) went over his regrets when designing the language, and introduced [Deno](https://github.com/ry/deno), a TypeScript runtime built around V8. One of his regrets was how Node's package system was designed, and a few issues that arose from it. From the trite (Not appending `.ts` or `.js` to imports) to deeper, harder to fix issues (Singular control and point of failure with the NPM registry).

I wanted to expand on his points and genericize it across platforms and dive into how every language or framework does it - from \*nix's `apt` to Rust's `crates` to PHP's `composer`.

# Overview

To start we have to actually define what a package manager actually _is_ - what exactly does a modern package manager provide?

- Remote package installation

- Dependency management

- Version management

# History

# Most common failures

# Doing things "right"

# Conclusion

### Additional Reading

These are some links and resources that helped me while I was researching this article.
