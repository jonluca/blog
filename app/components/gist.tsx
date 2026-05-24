"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

interface GistProps {
  id: string;
  file?: string;
}

const minHeight = 100;
const maxHeight = 600;

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function getGistUrl(id: string, file?: string) {
  const url = id.startsWith("http") ? new URL(id) : new URL(`${id.endsWith(".js") ? id : `${id}.js`}`, "https://gist.github.com/");

  if (url.origin !== "https://gist.github.com" || !url.pathname.endsWith(".js")) {
    throw new Error("Gist embeds must use a gist.github.com JavaScript embed URL");
  }

  if (file) {
    url.searchParams.set("file", file);
  }

  return url.toString();
}

export default function Gist({ id, file }: GistProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const messageId = useId();
  const [height, setHeight] = useState(180);
  const gistUrl = getGistUrl(id, file);
  const title = file ? `Embedded GitHub Gist: ${file}` : "Embedded GitHub Gist";
  const srcDoc = useMemo(() => {
    const safeUrl = escapeHtml(gistUrl);
    const safeMessageId = JSON.stringify(messageId);

    return `<!doctype html>
<html>
  <head>
    <base target="_blank">
    <style>html,body{margin:0;padding:0;}*{font-size:12px;}</style>
  </head>
  <body>
    <script>
      (() => {
        const notify = () => parent.postMessage({
          type: "jonluca-gist-height",
          id: ${safeMessageId},
          height: Math.ceil(document.documentElement.scrollHeight)
        }, "*");
        new ResizeObserver(notify).observe(document.documentElement);
        window.addEventListener("load", notify);
      })();
    </script>
    <script src="${safeUrl}"></script>
  </body>
</html>`;
  }, [gistUrl, messageId]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data as { height?: unknown; id?: unknown; type?: unknown } | null;
      if (
        event.source !== iframeRef.current?.contentWindow ||
        !data ||
        data.type !== "jonluca-gist-height" ||
        data.id !== messageId ||
        typeof data.height !== "number" ||
        !Number.isFinite(data.height)
      ) {
        return;
      }

      setHeight(Math.min(maxHeight, Math.max(minHeight, Math.ceil(data.height))));
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [messageId]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      srcDoc={srcDoc}
      loading={"lazy"}
      sandbox={"allow-scripts allow-popups allow-popups-to-escape-sandbox"}
      style={{ height, maxHeight, overflow: "auto" }}
      width={"100%"}
      className={"my-6 border-0"}
    />
  );
}
