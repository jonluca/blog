import { toString } from "mdast-util-to-string";
import type { Heading, Root } from "mdast";
import { unified } from "unified";
import remarkParse from "remark-parse";

export interface TableOfContentsEntry {
  id: string;
  title: string;
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function extractLevelTwoHeadings(source: string): TableOfContentsEntry[] {
  const tree = unified().use(remarkParse).parse(source) as Root;

  return tree.children
    .filter((node): node is Heading => node.type === "heading" && node.depth === 2)
    .map((node) => {
      const title = toString(node);
      return {
        id: slugifyHeading(title),
        title,
      };
    });
}
