import React, { type ComponentProps } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodePre({ children }: { children: React.ReactNode }) {
  return <div className={"-mx-16 my-7 bg-[#282c34] px-16 py-1"}>{children}</div>;
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
        customStyle={{
          border: "none",
        }}
        language={language}
        style={oneDark}
        codeTagProps={{
          className: "py-4",
          style: {
            display: "block",
            userSelect: "text",
            MozUserSelect: "text",
            WebkitUserSelect: "text",
            msUserSelect: "text",
            overflow: "auto",
          },
        }}
        // Ensure parent elements don't interfere with selection
        PreTag={({ children, ...preProps }) => (
          <pre
            {...preProps}
            style={{
              ...preProps.style,
              padding: 0,
              paddingLeft: 8,
              userSelect: "text",
              MozUserSelect: "text",
              WebkitUserSelect: "text",
              msUserSelect: "text",
            }}
          >
            {children}
          </pre>
        )}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </CodePre>
  );
}
