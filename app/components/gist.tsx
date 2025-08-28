"use client";
import React, { useEffect, useRef } from "react";

interface GistProps {
  id: string;
  file?: string;
}

const Gist: React.FC<GistProps> = ({ id, file }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const defineUrl = (): string => {
      if (id.startsWith("http")) {
        return id;
      }
      const fileArg = file ? `?file=${file}` : "";
      const suffix = id.endsWith(".js") ? "" : ".js";
      return `https://gist.github.com/${id}${suffix}${fileArg}`;
    };

    const updateIframeContent = (): void => {
      const iframe = iframeRef.current;
      if (!iframe) {
        return;
      }

      let doc: Document | null = null;
      if (iframe.contentDocument) {
        doc = iframe.contentDocument;
      } else if (iframe.contentWindow) {
        doc = iframe.contentWindow.document;
      }

      if (!doc) {
        return;
      }

      const gistLink = defineUrl();
      const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
      const styles = "<style>*{font-size:12px;}</style>";
      const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
      const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
      const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

      doc.open();
      doc.writeln(iframeHtml);
      doc.close();
    };
    updateIframeContent();
  }, [id, file]); // Re-run when id or file changes

  const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;

  return (
    <iframe
      ref={iframeRef}
      style={{
        maxHeight: 400,
        overflow: "auto",
      }}
      width={"100%"}
      frameBorder={0}
      id={elementId}
    />
  );
};

export default Gist;
