---
title: "Web3, Free Candy, and exploits galore"
date: 2022-02-26 18:59:43 -0500
header-img: "/images/candy-machine-withdrawal.png"
---

On 1/4/22, nearly 4000 Solana NFT projects were drained of their funds due to a reinitialization bug present in the Candy Machine v1 smart contract on Solana. The account, [cHfYkrVAwfEoe3Mr2GbvzpNQJboDL6AiBoFZDsf8dxj](https://solscan.io/account/cHfYkrVAwfEoe3Mr2GbvzpNQJboDL6AiBoFZDsf8dxj), converted 1,027 SOL into 155k USDC using Raydium, and then transferred the USDC into their FTX account. The vulnerability was patched while the attack was actively going on, at 6:20am on 1/4/22.

This investigation uncovered similar vulnerabilities in NFT exchanges, yet to be publicized. 


## Background

Metaplex's [Candy Machine](https://docs.metaplex.com/candy-machine-v2/introduction), a Solana program which handles the logistics of NFT issuance, just launched last September. You instantiate it with their CLI, feed it your images, and it handles the rest. It will deal with all the technically complex parts of putting the images on chain and creating the smart contracts to mint them to the buyers.

It’s extremely simple to launch an NFT sale with Metaplex; you choose the price you want to set, the timing of the collection drop and any other configs - it handles the rest and mints right to recipients wallets.

This simplicity greatly lowered the barrier to entry - you didn't need to have any Rust knowledge or Solana API experience to use it. When it first came out it led to a huge increase in NFT collections.

Since its inception, over 14,800 candy machines have been created, each corresponding to an NFT collection.

{% include image.html file="cm-program-solscan" alt="Candy Machine program" %}


## Impact

The goal of this research was to identify how the attacker exploited the vulnerability, trace the funds and their total dollar denominated value, and then to determine which projects were impacted.

The attacker targeted 4,410 of the 14,800 candy machines that were created at the time. I'm guessing they didn't target every vulnerable program because they had trouble pulling the historical candy machine creation records.

They fired off withdrawal transactions that took advantage of the reinitialization bug over the period of an hour.

The withdrawal transactions lasted between [5:57am](https://solscan.io/tx/coSeMNsGKebMGP1vqPZcEbu6rYiF4BbCRrtBRNLFi4TbMo3Psd7KZyvDTPv6KyeqZNDyMVU3o6D3rgQPG1aV94J) and [6:49am](https://solscan.io/tx/3zhZDtCV2vr5fSG2TxEjXXTdMmfk8rfnM4mNAavKdZM1Cy6627hN8vDnu7gaUk6oPmzLLcacJpTopK1bsscX9MbB) EST on January 4th 2022. At [6:20am](https://solscan.io/tx/3zhZDtCV2vr5fSG2TxEjXXTdMmfk8rfnM4mNAavKdZM1Cy6627hN8vDnu7gaUk6oPmzLLcacJpTopK1bsscX9MbB), the patched contract was deployed, causing every subsequent transaction by the attacker to fail.

Of the 4,410 candy machines targeted, 3,470 were completely drained. The vulnerability didn't give the attacker permanent control of the candy machines - only for the duration of that transaction, which means that the candy machines that were impacted are not currently vulnerable.

Some of the notable projects impacted by this vulnerability are SolSteads, Contrastive, and Degen Ape Society, with a full list below.

## Vulnerability

The bug was subtle - the attacker was injecting pre-initialized accounts and the program was not checking if the account had already been initialized, meaning an attacker could populate their own address as the authority of the contract.

[The fix itself was fairly straightforward.](https://github.com/metaplex-foundation/metaplex/commit/4ddc13ea29070172f358e054baa9d4c47687a26b)

{% include image.html file="candy-machine-fix" alt="Fix for the vulnerability" %}

The hack seems fairly unsophisticated - the damage this vulnerability could do was pretty high, as the bug effectively allowed any account to control the Candy Machine. The attacker submitted the transactions slowly, and would probably have been able to capture the entirety of the vulnerable set of candy machines had they submitted the transactions through their own RPC pool without rate limits.

What's also interesting about the fix is that it was [actually fixed in code on December 31st for Candy Machine v2](https://github.com/metaplex-foundation/metaplex/commit/e9ef376443c3c8fd2f5b151dd0b09f757b1bf35c), but the CMv1 contract wasn't redeployed until it was actively being exploited.


## Fund extraction

The attacker used Serum DEX and RaydiumSwapV2 to convert the SOL to USDC, then sent the USDC to a FTX address. It should be fairly easy to reverse their idea from FTXs end if they've KYC'd properly.

{% include image.html file="candy-machine-withdrawal" alt="Withdrawal transaction" %}

## Candy Machine

Candy Machine v1 is now deprecated, and any new candy machines created should be v2s. [From their docs](https://docs.metaplex.com/candy-machine-v2/introduction):

> The second iteration of the well-known Candy Machine, a fully on-chain generative NFT distribution program, provides many improvements over its predecessor. The new version also allows you to create a whole new set of distribution scenarios and offers protection from bot attacks, while providing the same easy-to-use experience.

## Research

Querying for historical data on chain in Solana is a time consuming process. I tried doing research in jupyter notebook at first, but the volume of data made it hard to parse and query.

I ended up cloning the historical transactions into a local database, and indexing that for faster queries.

```js
export class MongoClient {
  init = async () => {
    log.info("Connecting...");
    await connect("mongodb://127.0.0.1:27017", {
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      dbName: "candymachine",
      minPoolSize: 50,
      maxPoolSize: 500,
    });
    log.info("Connected to mongo db");
  };

  saveHashes = async (hashes: object[]) => {
    log.debug("Saving batch...");
    try {
      await Txhashes.insertMany(hashes, { ordered: false });
    } catch (e: any) {
      // ignore dup key errors
      if (!e.message.includes("E11000")) {
        log.error(e);
      }
    }
    const count = await Txhashes.count();
    log.debug(`Saved batch - ${count} total documents`);
  };

  getHashes = async (filter: FilterQuery<typeof Txhashes> = {}) => {
    const docs = await Txhashes.find(filter).limit(25000);
    return docs;
  };
}
```

I first cloned all the transaction hashes into Mongo - I set up a connection pool of various RPCs to accomplish this, as there's no way of getting it from the Solana mainnet-beta RPC in a reasonable amount of time.


```js

 const history = await con.getSignaturesForAddress(
    new PublicKey(publicKey),
    options
  );

 for (const c of chunk(history, 100000)) {
    await mc.saveHashes(c);
    log.info("Completed chunk");
  }
```

Then, after fetching all the hashes, I would clone the parsed transaction details into Mongo

```js
const run = async () => {
  await mc.init();
  log.info("Fetching hashes");
  let hashesToFetch = await mc.getHashes({ tx: null });
  log.info("Fetched hashes");
  let i = 0;
  while (hashesToFetch.length) {
    let isNearEnd = hashesToFetch.length < 10000;
    const chunkSize = isNearEnd ? 10 : 200;
    if (isNearEnd) {
      shuffle(hashesToFetch);
    }
    const chunkedHistory = chunk(hashesToFetch, chunkSize) as string[][];
    const processChunk = async (hashes: any[]) => {
      let message = `Fetched txs ${i}`;
      let savedTxMessage = `Saved txs ${i}`;
      i++;

      console.time(message);
      const hashMap = {};
      hashes.forEach((hash) => {
        if (hash.signature) {
          hashMap[hash.signature] = hash;
        } else {
          console.error("what");
        }
      });

      try {
        const { c, tx: txs } = await fetchTxsWithFallbackWithConnection(
          hashes.map((p) => p.signature)
        );

        console.timeLog(message, c?._rpcEndpoint);
        console.timeEnd(message);
        let failureCount = 0;
        txs.forEach((tx) => {
          if (!tx) {
            failureCount++;

            return;
          }
          tx.transaction.signatures.forEach((s) => {
            if (hashMap[s]) {
              hashMap[s].tx = tx;
            }
          });
        });
        if (failureCount) {
          console.error(`Invalid txs: ${failureCount}`);
        }
        console.time(savedTxMessage);
        await Txhashes.bulkSave(hashes);
        console.timeEnd(savedTxMessage);
      } catch (e) {
        return;
      }
    };
    try {
      const promises = chunkedHistory.map((h) => limit(() => processChunk(h)));
      await Promise.all(promises);
    } catch (e) {
      console.error(e);
      console.error(
        `Chunk failed with total history length of ${hashesToFetch.length}`
      );
    }
    console.log("Finished chunk");
    log.info("Fetching hashes");
    hashesToFetch = await mc.getHashes({ tx: null });
    log.info("Fetched hashes");
  }
};
```

I also pulled every transaction (legitimate and the attackers) that called the withdraw function on the candy machines.

Of the 14,800 candy machines, 11,848 have had the withdraw function executed on them. The top accounts associated with these functions are below.

{% include image.html file="cm-top-withdrawers" alt="Top withdrawer callers" %}

Only `cHfYkrVAwfEoe3Mr2GbvzpNQJboDL6AiBoFZDsf8dxj` seems to be doing this maliciously - the other accounts are all calling legitimate withdraw functions.

`F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj` actually seems to have created over 2,000 candy machines, and then attempted to call withdraw on them, single handedly creating \~14% of all candy machines on Solana.


## [Redacted Pending Vulnerability Disclosure]

[Redacted pending vulnerability disclosure of Solana exchange]

### [Redacted Pending Vulnerability Disclosure]

[Redacted pending vulnerability disclosure of Solana exchange]

## Identified Projects

I went through and fetched the public keys to all known affected projects and tried to map them back to the hacked machines. I identified 334 unique projects that were actively listed on Magic Eden, Solanart, DigitalEyez, and Solsea as being affected.

<span style="max-height: 400px; white-space: pre-line; overflow: auto; display: flex; border: 1px solid black; padding: 4px;">012Funksaicy
0xDRIP
100Radials
169 Pixel Gang
3D Flowers
A Pixel Art
Abstergo
Aeterna Civitas
Afrobubble
AI: Baby Bots
Aircrafts
AIRDOGS
Alphabet Originals
Angomon
Angry BaboonS
Angry Bunny Club
Angry Citizens
AngryWorms
Anti Artist Club
ApexDucks Halloween
Arcade '88
Art by NRG – Pop Sushi
Artificial Irrelevants
Autistic Reindeer Herd
Baby Ape Social Club
Baby Bait
Baby Frogs
Baby Goblin
Bad Bromatoes
BADBOYS
BalisariNFT
Bannurs
Bare Bones Society: The Kingdom Of Secrets
Beat Drops V1
Boat Boys
BoldFrames
Boopie Gen 1
Bored Ape Social Club
Boss Babes
Broken Robot Burger Bar
bugbearz
Bunny Warriors
CASSETS Audio
CatPunk
CATPUNK OG PASS
Cats Club NFT
Chickenz
ChihuahuaSol
Classic Art Mashups
Coherence
Combat Women NFT
Contrastive
Crazy Pickles
Creepy Girls
Crypto Greeks
Crypto Idolz - Faces
CryptoCream
CryptoCubs
CryptoCubs Mutants
Cryptone™
Cryptonic Creations
CryptoRock
CryptoTeds
CryptZero Season 2 - Ghosts
Cult of Meerkats
CyberKeys
Danger Valley
Danuki Dojo
Deadass
Deeps
Degen Ape Society
DegenEggs
Degeneggs - Gen 2
Desolates Metaverse
Dessert Girls
DigiLife
Dinos Zone
Dippy Dragons NFT
Doll Society
Dragon Eggs NFT
Dragon Slayerz
Dreamland Monkeys
Element Art NFT 2D
Enigma Expanses
enviro
Enviro
Epoch Labs
Ethereans
Eyeballz
Eyes WTF
Fallen Traveler
Fast Food Thugbirdz
Finefolk
Floppy Disk Nft
Flutter
Fractures
G.O.A.T. Collection
Galactic Goose
GAMEKIDZ
GANder g0
Gem Heroes
Ghostface
Ghostly Sols
Ghoulie Gang
Gremlins NFT
Hallow Birds
Happy Pups
Hellish Party Boollons
Hello World! NFT
Hemp
Heroes and Villains: PASS
High Roller Hippo Clique
HOAG play
Honorary Space Bums
Hot Bunnies NFT
Houses Of pixel
Iceland - 0xDRIP
Icy Bearz NFT
Idle Planets - Autumn 2021 Moon
Idle Planets - Holiday 2021 Moon
Infamous Apes
InnerMind
Intersolar
iTrading_Bot
Jelly Beasts
Jingle Monkeys
Joeian's Collection
JOSEPHTAYLOR.ART: CRYSTAL BEAMS
Jungle Cats
Just Blocks
Kitten Coup
Knightdom
KoreanPunkz
Krunk Roach NFT
Kyoudai Academy: Solana Arcade Games
Labyrinth
Lanabots
Lazy Heroes
Little Noots
Los Cactus Hermanos
LuchaLucha NFT
Lucky Kittens
LuxAI
Mad Vikings Arms Collection
Magic Solana Shits
Make your own NFT
Mark McKenna's Heroes & Villains: Origins
Megumi
Meta Homes
Metadroids
Metakatz
metaSpheres
MetaSpheres
Mickey Degods
Millionaire Apes Club
Mindfolk
Mini Royale: Nations - Season 1 (Premium)
Mob Monkettez
MogulWars
Monkey Ball
MonkeyBall Gen Zero
My name Is Sol
My Name is Sol
Myopa
Mystic Potion
Neopets Metaverse
NFT Poetry
NFTrees Solana
NGMIPandas
Nifty Nanas
NON-FUNGIBLE "BEES"
Nyan Heroes
OGbottles
Oink Club NFT
OinkClub NFT
PEEPS
Pengu Love
Personify
Pesky Ice Cube
Phantom
Pilgrim Society
PIMP MY THUG
Pirates of Sol Bay - Bottles
Pirates of Sol Bay - Treasures
pitcrew
Pix World NFT
Pixel Island NFT
PixelWorms
PixWorldNFT
Platypusol Family
Playground Waves
Playground: Waves
PopsicleNFT
Posh Dolphs
Powder Heroes
Prickly Pete's Platoon - OG Cactoon Series
PSY Network | PlanetZ
Pudgy Pigeons
Rabbit Punks
Realm Kings
Red paperclip
RowdyRex
Rug Toadz
Ruled by Randomness: The Genesis
SantaClaus
Savage Dray by Squeak Brigade
SavagesTotsys
SawBunny
Secret Duck Society
SGF United
Shadowy Super Coder
Shadowy Super Coder DAO
SharkBros
shatteredmarble
ShroomZ
Slimeballz
sLoot
Smileys
Smolpenguins
Snek Gang
soAlien
SocksOnSolana
Sol Diamond Hands
Sol Lions
SOL NFL PLAYER'S
SOL NFL Players
SOL Parasites
Sol Slugs
Sol Tamagotchi
Sol Tapes
SOLadies
Solagon
SolAlbums
Solamids
Solana Baby Monkey Business
Solana Bananas
Solana Birbs
Solana Bros
Solana Cat Gang
Solana Fan The Game of Squid
Solana Feline Business
Solana Havana Cigar Club
Solana Locks
Solana Mystery Box Items
Solana Mystery Items
Solana Pickles
Solana Reversed Monkey Business
Solana Robot Business
Solana Samurai Journey
Solana Slugs
SOLANA SUPERCAR CLUB
Solana Surfers
Solana Tactical RPG STACC
solanabets | The Clique NFT
SolArc NFT
Solarnauts: Mission Bravo
SolBlocks
Solbusters
Solccoons
SolCrocos
Soldalas
SolDice
SOLDIER RABBITS
SolEmoji
Solez
SolFoxes
SolGalaxy
SolGangsta
Solloons
Sollyfish
Solmon
Solmoverse: Collection 0
Solmushies
SOLNANA
SolNauts
SolOrbs
Solryx
SolSlimes
SolSneakers
Solsteads Surreal Estate
SolStoners
SolTowers
Solutions
Solvaders
SolWatchers 
Soul Dogs
Soulofox
Space Bums
Space Bums: Galaxy Mint Pass
Spiderverse
Spirits of Solana
Squareheadz
Squid Society
Squirrelz
Stash
StratosNFT
Structs
Superballz
Surging Bulls
Synesthesia, by Labyrinth
Terrarium Tanks
Test Guys
Test Guys Item Outpost
The Assembly
The Baby Boogles
The Beverly Hills Car Club
The Collectoooooor
The Elementies
The Exiled Apes
The Nasty Boys
The Rock
theBULL by metaCOLLECTIVE
TheDragonClub
Thirsty Cactus Garden Party
Thoughtful Folk NFT
ThugDragonz
Tiny Tigers
Titanz
ToneBox
Undead Sols
Vale Unleashed Rel
Vampires of SOL
Vampires Of SOL
WallStreetPunkS
Wicked Pigeon Posse
Wieners
Wieners Club
Wildfire Native
Winter Tiny Tigers
Wolves On Wallstreet
WOOFers
World of Deities NFT
WUKONGSOL
Xperiment
</span>

## Bug Bounty


In conjunction with this vulnerability research, Metaplex has launched a [bug bounty program.](https://www.metaplex.com/posts/bug-bounty-blog)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Earlier this week the <a href="https://twitter.com/metaplex?ref_src=twsrc%5Etfw">@Metaplex</a> Foundation announced a Bug Bounty program—our commitment to white-hat developers we’ve been spinning up for months.<br><br>Our first contributor, <a href="https://twitter.com/jonluca?ref_src=twsrc%5Etfw">@jonluca</a>, uncovered a vulnerability in CMv1 back in January. More below. 👇 <a href="https://t.co/sq0cjtLtTj">https://t.co/sq0cjtLtTj</a></p>&mdash; Metaplex (@metaplex) <a href="https://twitter.com/metaplex/status/1504846982954762290?ref_src=twsrc%5Etfw">March 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Timeline

* Dec 31st - [Fix for CMv2 is landed](https://github.com/metaplex-foundation/metaplex/commit/e9ef376443c3c8fd2f5b151dd0b09f757b1bf35c)
* Tue Jan 04 2022 05:57:11 GMT-0500 - [First attacker transaction is executed](https://solscan.io/tx/coSeMNsGKebMGP1vqPZcEbu6rYiF4BbCRrtBRNLFi4TbMo3Psd7KZyvDTPv6KyeqZNDyMVU3o6D3rgQPG1aV94J)
* Tue Jan 04 2022 06:20:29 GMT-0500 - [First transaction that tries to interact with the newly updated contracted is executed](https://solscan.io/tx/3zhZDtCV2vr5fSG2TxEjXXTdMmfk8rfnM4mNAavKdZM1Cy6627hN8vDnu7gaUk6oPmzLLcacJpTopK1bsscX9MbB)
* Tue Jan 04 2022 06:49:27 GMT-0500 - [Last transaction that tries to interact with the newly updated contracted is executed](https://solscan.io/tx/3zhZDtCV2vr5fSG2TxEjXXTdMmfk8rfnM4mNAavKdZM1Cy6627hN8vDnu7gaUk6oPmzLLcacJpTopK1bsscX9MbB)
* Tue Jan 06, 2022, 18:25 GMT-0500 - [Fix for CMv1 is landed](https://github.com/metaplex-foundation/metaplex/commit/4ddc13ea29070172f358e054baa9d4c47687a26b)
* Tue Jan 15, 2022, 21:15 GMT-0500 - Metaplex is alerted to this specific vulnerability.
* Fri Mar 11, 2022 - [Metaplex bug bounty program is launched in conjunction with this post](https://www.metaplex.com/posts/bug-bounty-blog)
* Fri Mar 18, 2022 - [Metaplex bug bounty for CMv1 is announced](https://twitter.com/metaplex/status/1504846982954762290)

## Appendix

This vulnerability was discussed in Discord's and on Twitter but was not widely analyzed.

All the code for this research will be made public pending final vulnerability disclosures on various exchanges.