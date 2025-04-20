import type { Metadata } from "next";
import { CustomMDX } from "../components/mdx";

export const metadata: Metadata = {
  title: "About",
  description: "About JonLuca DeCaro",
};

const content = `
Hi!

I'm [**JonLuca DeCaro**](https://twitter.com/jonluca). I'm the co-founder of [Weights](https://weights.gg). I grew up in north east Italy, and moved to the United States in 2014 to study in Los Angeles.

Previously I was a founder at Alta, and before that I worked at Citadel, Pinterest, Google, and Apple. I am a full stack engineer, and have worked in growth, security, and product.

<Image alt="San Diego, 2020" footnote="San Diego, 2020" file="sandiego" />

## New here?

I recommend starting with the following three posts. They all focus on tech and explorations of topics I find interesting.

1. [Illegal streams, decrypting m3u8's, and building a better stream experience](https://blog.jonlu.ca/posts/illegal-streams?ref=about) - An article on exploring illegal sports streams online, building a client to watch them, and seeing how the streamers are piggybacking real services.

2. [Obfuscated javascript, scam emails, and American Express](https://blog.jonlu.ca/posts/deobfuscating-amex-scammer?ref=about) - An article on reversing and decompiling obfuscated javascript, tracking spam emails, and finding the root command and control server for a scam campaign.

3. [Ryanair, Hamiltonian Cycles, and using graph theory to find cheap flights](https://blog.jonlu.ca/posts/ryan-air?ref=about) - An article on how I routed my European vacation, writing an NP hard problem solver, and releasing a tool to help you do the same.

I also write for HackerNoon and freeCodeCamp on [Medium](https://medium.com/@jonluca).

You can [get an RSS feed of the blog.](/feed.xml)

## What am I reading?

Here are a few blogs or places on the internet that I enjoy reading. I don't agree with everything on all of them, so don't take it as an endorsement of the site as a whole.

- [http://danluu.com/](http://danluu.com/)

- [http://www.paulgraham.com/articles.html](http://www.paulgraham.com/articles.html)

- [Money Stuff by Matt Levine](https://www.bloomberg.com/opinion/authors/ARbTQlRLRjE/matthew-s-levine)

- [https://astralcodexten.substack.com/](https://astralcodexten.substack.com/)

- [https://www.lesswrong.com/](https://www.lesswrong.com/)

## Photos

Few things are as personally identifiable as photos, and as the old adage goes, a picture is worth a thousand words, so here's a bit about me.

<Image alt="Young me rock climbing" footnote="Probably my only time ever going rock climbing" file="rock-climbing" />

<Image alt="Castle" footnote="Christmas dinner in a castle" file="castle" />

<Image alt="Helicopter" footnote="On a peak in Denali" file="helicopter" />

<Image alt="Igloo" footnote="Our igloo in fairbanks" file="igloo" />
`;

export default function AboutPage() {
  return (
    <div className={"mb-8"}>
      <h1 className={"clear-both mt-0 mb-2 text-2xl leading-tight font-bold uppercase"}>About</h1>
      <div className={"prose"}>
        <CustomMDX source={content} />
      </div>
    </div>
  );
}
