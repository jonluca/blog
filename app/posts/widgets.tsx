import type { MDXRemoteProps } from "next-mdx-remote/rsc";

type Components = NonNullable<MDXRemoteProps["components"]>;

export async function getPostComponents(slug: string): Promise<Components> {
  switch (slug) {
    case "ca-plate-checker":
    case "nintendo-switch":
    case "optimizing-a-static-site": {
      const { DeferredWidget } = await import("../components/deferred-widget");
      const Gist = ({ id, file }: { id: string; file?: string }) => <DeferredWidget name={"Gist"} widgetProps={{ id, file }} />;
      return { Gist };
    }
    case "clock": {
      const { DeferredWidget } = await import("../components/deferred-widget");
      const ClockContent = () => <DeferredWidget name={"ClockContent"} />;
      return { ClockContent };
    }
    case "information": {
      const { DeferredWidget } = await import("../components/deferred-widget");
      const Information = () => <DeferredWidget name={"Information"} />;
      const InformationGraph = () => <DeferredWidget name={"InformationGraph"} />;
      return { Information, InformationGraph };
    }
    case "ryan-air": {
      const { RyanairMainApp } = await import("../custom-code/RyanairGraphServer");
      return { RyanairApp: RyanairMainApp };
    }
    case "spf-dkim": {
      const { DeferredWidget } = await import("../components/deferred-widget");
      const SpfDkimCharts = () => <DeferredWidget name={"SpfDkimCharts"} />;
      return { SpfDkimCharts };
    }
    default:
      return {};
  }
}
