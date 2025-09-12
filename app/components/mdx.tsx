import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import React from "react";
import remarkFootnotes from "remark-gfm";
import type { MDXRemoteProps } from "next-mdx-remote/dist/rsc";
import { Code } from "./code";
import { Table } from "./table";
import dynamic from "next/dynamic";
import ReactGist from "./gist";

const SpfDkimCharts = dynamic(() => import("../custom-code/spf-dkim-charts").then((mod) => mod.SpfDkimCharts));
const InformationGraph = dynamic(() => import("../custom-code/InformationGraph").then((mod) => mod.InformationGraph));
const RyanairApp = dynamic(() => import("../custom-code/RyanairGraphServer").then((mod) => mod.RyanairMainApp));
const ClockContent = dynamic(() => import("../custom-code/mathjax").then((mod) => mod.ClockContent));
const Information = dynamic(() => import("../custom-code/mathjax").then((mod) => mod.Information));

type CustomLinkProps = ComponentProps<"a">;

const Gist = ({ id }: { id: string }) => {
  return <ReactGist id={id} />;
};

function CustomLink(props: CustomLinkProps) {
  const href = props.href!;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target={"_blank"} rel={"noopener noreferrer"} {...props} />;
}

// Jekyll-style image component with footnote support
function CustomImage({
  alt,
  src,
  footnote,
  file,
  className,
}: {
  className?: string;
  alt?: string;
  src?: string;
  footnote?: string | React.ReactNode;
  file?: string;
}) {
  const getSrc = () => {
    if (src) {
      return src;
    }
    if (file) {
      const url = new URL(file, "https://assets.jonlu.ca");
      const extensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
      const isValidExtension = extensions.some((ext) => file.endsWith(ext));
      if (!isValidExtension) {
        url.pathname += ".png";
      }
      return url.href;
    }
    return undefined;
  };

  return (
    <>
      <div className={`centered-image-container ${className || ""}`.trim()}>
        <img src={getSrc()} alt={alt || (typeof footnote === "string" && footnote) || "image"} className={"centered-image"} />
      </div>
      {footnote && <p className={"footnote"}>{footnote}</p>}
    </>
  );
}

// Jekyll-style image component with footnote support
function Video({ src, footnote }: { src?: string; footnote?: string }) {
  return (
    <>
      <video className={"centered-image"} controls autoPlay loop>
        <source src={src} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video>
      {footnote && <p className={"footnote"}>{footnote}</p>}
    </>
  );
}

function slugify(str: React.ReactNode) {
  return str!
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: "text-black font-bold" },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor text-black font-bold",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}
// Custom blockquote component to support ">" syntax in markdown
function Blockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className={"-mx-16 my-7 border-l-3 border-gray-300 bg-[#f9f9f9] px-16 py-2"}>{children}</blockquote>;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: CustomImage,
  Video,
  Gist,
  CustomImage,
  InformationGraph,
  RyanairApp,
  a: CustomLink,
  ClockContent,
  Information,
  SpfDkimCharts,
  code: Code,
  Table,
  blockquote: Blockquote, // Add custom blockquote component
  pre: ({ children }) => (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<{ isBlock: boolean }>(child as any, { isBlock: true });
        }
        return child;
      })}
    </>
  ),
} as MDXRemoteProps["components"];

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      options={{
        mdxOptions: {
          remarkPlugins: [remarkFootnotes],
        },
      }}
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
