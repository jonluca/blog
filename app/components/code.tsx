import React, { type ComponentProps } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function CodePre({ children }: { children: React.ReactNode }) {
  return <div className={"-mx-4 my-7 overflow-x-auto bg-[#282c34] px-4 py-1 sm:-mx-16 sm:px-16"}>{children}</div>;
}

export function Code({ children, className, isBlock, ...props }: ComponentProps<"code"> & { isBlock?: boolean; children: string }) {
  // Extract language from className, default to plain text if not specified
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";

  // If it's an inline code block (no language specified)
  if (!className) {
    if (!isBlock) {
      return (
        <code className={"bg-[#ececec] text-black"} {...props}>
          {children}
        </code>
      );
    }
    return (
      <CodePre>
        <code className={"py-5 whitespace-pre text-white"}>{children}</code>
      </CodePre>
    );
  }

  // For code blocks with language (fenced code blocks)
  return (
    <CodePre>
      <SyntaxHighlighter
        className={"syntax-code-block"}
        language={language}
        useInlineStyles={false}
        codeTagProps={{
          className: "block py-4 select-text",
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </CodePre>
  );
}
