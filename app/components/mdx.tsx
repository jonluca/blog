import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import React from "react";
import remarkFootnotes from "remark-gfm";
import { Code } from "./code";
import { Table } from "./table";
import { slugifyHeading } from "../posts/headings";

type CustomLinkProps = ComponentProps<"a">;

function CustomLink({ children, href = "", ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} prefetch={false} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target={"_blank"} rel={"noopener noreferrer"} {...props}>
      {children}
    </a>
  );
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
        <img
          src={getSrc()}
          alt={alt || (typeof footnote === "string" && footnote) || ""}
          className={"centered-image"}
          loading={"lazy"}
          decoding={"async"}
        />
      </div>
      {footnote && <p className={"footnote"}>{footnote}</p>}
    </>
  );
}

type VideoProps = { src?: string; footnote?: string } & (
  | { silent: true; captionsSrc?: never; captionsLabel?: never }
  | { silent?: false; captionsSrc: string; captionsLabel?: string }
);

/* oxlint-disable react/jsx-curly-brace-presence -- Literal track metadata is required by static accessibility checks. */
function Video(props: VideoProps) {
  const { src, footnote, silent = false } = props;
  const label = footnote || "Embedded video";
  const captionsSrc = props.silent ? "/captions/silent.vtt" : props.captionsSrc;
  const captionsLabel = props.silent ? "Silent video" : props.captionsLabel || "English captions";

  return (
    <>
      <video className={"centered-image"} controls preload={"metadata"} muted={silent} aria-label={label}>
        <source src={src} type={"video/mp4"} />
        <track kind="captions" src={captionsSrc} srcLang="en" label={captionsLabel} default />
        Your browser does not support the video tag.
      </video>
      {footnote && (
        <p className={"footnote"}>
          {footnote}
          {silent ? " (silent video)" : ""}
        </p>
      )}
    </>
  );
}
/* oxlint-enable react/jsx-curly-brace-presence */

function headingText(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return headingText(child.props.children);
      }
      return "";
    })
    .join("");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const label = headingText(children);
    const slug = slugifyHeading(label);
    const headingContent = (
      <>
        <a href={`#${slug}`} className={"anchor font-bold text-black"} aria-label={`Link to section: ${label}`}>
          <span aria-hidden={"true"}>#</span>
        </a>
        {children}
      </>
    );

    return React.createElement(`h${level}`, { id: slug, className: "text-black font-bold" }, headingContent);
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}
// Custom blockquote component to support ">" syntax in markdown
function Blockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className={"my-7 border-l-3 border-gray-300 bg-[#f9f9f9] px-6 py-2 md:-mx-8 md:px-8"}>{children}</blockquote>;
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
  CustomImage,
  a: CustomLink,
  code: Code,
  Table,
  blockquote: Blockquote,
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
        blockJS: false,
        mdxOptions: {
          remarkPlugins: [remarkFootnotes],
        },
      }}
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
