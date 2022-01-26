---
title: "Web3, Free Candy, and exploits galore"
date: 2022-01-16 18:59:43 -0500
header-img: "/images/seated.png"
---

On 1/4/22, a newly-discovered reinitialization bug in the CandyMachine v1 smart contract was exploited to execute the withdraw function on 4,410 candy machines, draining each one and collecting a total of 1027 SOL. They then proceeded to use a Raydium liquidity pool to conver the SOL to USDC, which was then deposited in their FTX account.

The investigation into the incident lead to a few more vulnerabilities being discovered in NFT exchanges, which have not been made public yet.

## Background

Metaplex is a 

## Impact

The withdrawal transactions lasted between 5:57am and 6:49am EST on January 4th 2022. At 6:26am, the patched contract was deployed, causing every subsequent transaction to fail.
3470
Of the 4,410 candy machines targeted, 3,470 were completely drained.

## Timeline