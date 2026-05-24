"use client";

import { type ComponentType, useEffect, useRef, useState } from "react";

type WidgetName = "ClockContent" | "Gist" | "Information" | "InformationGraph" | "SpfDkimCharts";

interface DeferredWidgetProps {
  name: WidgetName;
  widgetProps?: Record<string, unknown>;
}

const loaders: Record<WidgetName, () => Promise<ComponentType<any>>> = {
  ClockContent: async () => (await import("../custom-code/mathjax")).ClockContent,
  Gist: async () => (await import("./gist")).default,
  Information: async () => (await import("../custom-code/mathjax")).Information,
  InformationGraph: async () => (await import("../custom-code/InformationGraph")).InformationGraph,
  SpfDkimCharts: async () => (await import("../custom-code/spf-dkim-charts")).SpfDkimCharts,
};

export function DeferredWidget({ name, widgetProps = {} }: DeferredWidgetProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [Widget, setWidget] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    let active = true;
    const load = () => {
      loaders[name]().then((component) => {
        if (active) {
          setWidget(() => component);
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return () => {
        active = false;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(host);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [name]);

  return (
    <div ref={hostRef} aria-busy={Widget === null}>
      {Widget ? <Widget {...widgetProps} /> : <p className={"text-sm text-neutral-500"}>Loading interactive content...</p>}
    </div>
  );
}
