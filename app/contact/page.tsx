import type { Metadata } from "next";
import { CustomMDX } from "../components/mdx";
import { createPageMetadata } from "../site";

export const metadata: Metadata = createPageMetadata({
  path: "/contact",
  title: "Contact",
  description: "Contact JonLuca DeCaro",
});

const content = `
You can email me at [hello@jonlu.ca](mailto:hello@jonlu.ca). You can also DM me on twitter at @jonluca.

<div className="mb-4">To get notified when I publish a new essay, please subscribe here:</div>
<iframe title="Subscribe to JonLuca's Blog by email" src="https://jonluca.substack.com/embed" loading="lazy" width="100%" height="200" frameBorder="0" scrolling="no"></iframe>
`;

export default function ContactPage() {
  return (
    <div className={"text-page reading-column mb-8"}>
      <h1 className={"clear-both mt-0 mb-2 text-2xl leading-tight font-semibold uppercase"}>Contact</h1>
      <div className={"prose"}>
        <CustomMDX source={content} />
      </div>
    </div>
  );
}
