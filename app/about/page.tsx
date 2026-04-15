import type { Metadata } from "next";
import { CustomMDX } from "../components/mdx";

export const metadata: Metadata = {
  title: "About",
  description: "About JonLuca DeCaro",
};

const content = `
Hi!

I'm JonLuca DeCaro. I currently work at [OpenAI](https://openai.com). Prior to that, I was a founder of [Weights](https://weights.com).

<Image alt="San Diego, 2020" footnote="San Diego, 2020" file="sandiego" />

## New here?

If you're new here, these three posts are a good place to start. They're representative of what I like writing about: technical rabbit holes, reverse engineering, product systems, and odd corners of the internet.

1. [Illegal streams, decrypting m3u8's, and building a better stream experience](https://blog.jonlu.ca/posts/illegal-streams?ref=about) - A look at illegal sports streams, how they piggyback real services, and what it took to build a better viewing client.

2. [Obfuscated javascript, scam emails, and American Express](https://blog.jonlu.ca/posts/deobfuscating-amex-scammer?ref=about) - Reverse-engineering obfuscated JavaScript from scam emails and tracing the campaign back to its command-and-control server.

3. [Ryanair, Hamiltonian Cycles, and using graph theory to find cheap flights](https://blog.jonlu.ca/posts/ryan-air?ref=about) - Using graph theory to plan a cheap European trip through Ryanair's network, then turning the idea into a tool other people can use.

You can also [subscribe to the blog via RSS.](/feed.xml)`;

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
