"use client";

import { type ComponentType, type ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  midcontent: ReactNode;
  postcontent: ReactNode;
}

export function DeferredRyanairApp(props: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [Widget, setWidget] = useState<ComponentType<Props> | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    let active = true;
    const load = () => {
      import("./RyanairGraph").then(({ RyanairApp }) => {
        if (active) {
          setWidget(() => RyanairApp);
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
  }, []);

  return (
    <div ref={hostRef} aria-busy={Widget === null}>
      {Widget ? <Widget {...props} /> : <p className={"text-sm text-neutral-500"}>Loading interactive route graphs...</p>}
    </div>
  );
}
