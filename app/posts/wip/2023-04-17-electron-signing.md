---
title: "The ungodly hellscape that is Apple notarization"
date: 2023-04-17 19:17:31 -0700
---

When I was building [MiMessage](https://github.com/jonluca/mimessage), I set up a CI/CD flow to automatically build + sign + notarize the Electron app for MacOS.

I pulled my hair out for almost two days while I investigated this issue. I couldn't repro it locally, and reverting to
