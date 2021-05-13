---
title: "How to redeem $2000 of HNS for being a FOSS developer"
date: 2021-05-09 17:22:33 -0400
header-img: "/images/namebase-balance.png"
---

If you were an active FOSS developer in 2019, you were gifted \~4,246 HNS, which as of May 2021 is worth 0.0359087 BTC, or $2k USD. Handshake wanted to reward FOSS developers by gifting handshake tokens (HNS). You can redeem these pretty easily, and either use them to support open source projects, or redeem them as bitcoin and cash them out.

## Prerequisites

Roughly 250,000 GitHub users qualified. You must have had at least **15 followers** during the week of **2019-02-04**. If you didn't have a GitHub account at the time, or didn't have 15 followers, or didn't have a valid public SSH key uploaded, you were not eligible for the airdrop.

## First steps

Download hs-airdrop and register for an account on https://namebase.io. Namebase will create a free HNS wallet for you, which you can easily transfer to BTC.

```
git clone https://github.com/handshake-org/hs-airdrop.git && cd hs-airdrop && npm install
```

Next go to https://www.namebase.io/ and find your wallets address. 

To redeem your HNS you'll need:

* The `hs-airdrop` binary
* The path to your private key
* Your wallet address

Namebase also has similar instructions on redeeming these coins at https://www.namebase.io/airdrop.

## SSH

If you want to use SSH, first confirm that the key you want to use is registered on GitHub, and was associated with your account on February 4th, 2019.

List all your keys with 

```
$ ls ~/.ssh/
```

Most likely it will be named `id_rsa`. Then run the hs-airdrop binary with the path to your private key. 

```
./bin/hs-airdrop --bare ~/.ssh/id_rsa hs1...<your address from namebase> 0.1
```

It will ask you to decrypt your private key. Note that the private key is *never sent anywhere* - you can verify this yourself from the source code of hs-airdrop, here: https://github.com/handshake-org/hs-airdrop. This will then proceed to submit your confirmation and check if it is in the airdrop tree. If it is, you'll get a base64 confirmation, which you'll submit below.

## PGP

PGP is a little more tricky - the documentation on the repo is a bit lacking. 

On MacOS, using PGP Suite, you can do the following.

First, get all your available keys:

```
$ gpg --list-keys
/Users/jonlucadecaro/.gnupg/pubring.kbx
---------------------------------------
pub   rsa4096 2017-08-24 [SC] [expires: 2033-08-20]
      849E61D17094A964866AE510E6DC4811DD593AC7
uid           [ultimate] JonLuca De Caro <jonlucadecaro96@gmail.com>
sub   rsa4096 2017-08-24 [E] [expires: 2033-08-20]
```

The key ID is the value below the `pub` key (in the case of the above, `849E61D17094A964866AE510E6DC4811DD593AC7`). You now want to export the private key, replacing my public key ID with yours.

```
$ gpg --armor --export-secret-keys 849E61D17094A964866AE510E6DC4811DD593AC7 > ~/Desktop/sec.asc
```

It will ask you for the keys password. 

to check if your key is in the airdrop tree, you next run, again replacing my key with yours:

```
./bin/hs-airdrop --bare ~/Desktop/sec.asc 849E61D17094A964866AE510E6DC4811DD593AC7 hs1...<your address> 0.1
```

This will tell you if your key is in the airdrop tree, and if it is, it will print out a base64 string with your airdrop redemption. 


## Submitting your confirmation

If your SSH or public key was in the airdrop tree, it will print a base64 string. Go to https://www.namebase.io/airdrop and paste it into the 5th box.

If it was valid, you'll receive your HNS in roughly 16 hours. 

{% include image.html file="namebase-balance" alt="Namebase Balance" %}

You can then proceed to sell it on namebase.

{% include image.html file="namebase" alt="Namebase Sell" %}

Just paste in whatever BTC balance you want to send it to, and it'll show up in a few minutes to hours. You can also use the coins to bid on names in namespace, or to support additional FOSS projects!

### Multiple keys

Note that if you have multiple SSH keys, it will only allow you to redeem for one. It will create valid nonces for each key, but once you redeem one in the chain, it invalidates the rest. If you submit the base64 for it it will look like it was accepted, but it will be rejected by the miners

## Other Airdrops

* Keybase did an XLM drop worth about $1000 USD as of May 2021 - check your https://keybase.io account
* Uniswap did a 400 ETH drop worth about $16,000 USD as of May 2021 - https://airdrops.io/uniswap/
