import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { DeferredWidget } from "../components/deferred-widget";
import { RyanairMainApp } from "../custom-code/RyanairGraphServer";

type Components = NonNullable<MDXRemoteProps["components"]>;
const Gist = ({ id, file }: { id: string; file?: string }) => <DeferredWidget name={"Gist"} widgetProps={{ id, file }} />;
const ClockContent = () => <DeferredWidget name={"ClockContent"} />;
const Information = () => <DeferredWidget name={"Information"} />;
const InformationGraph = () => <DeferredWidget name={"InformationGraph"} />;
const SpfDkimCharts = () => <DeferredWidget name={"SpfDkimCharts"} />;

export function getPostComponents(slug: string): Components {
  switch (slug) {
    case "ca-plate-checker":
    case "nintendo-switch":
    case "optimizing-a-static-site":
      return { Gist };
    case "clock":
      return { ClockContent };
    case "information":
      return { Information, InformationGraph };
    case "ryan-air":
      return { RyanairApp: RyanairMainApp };
    case "spf-dkim":
      return { SpfDkimCharts };
    default:
      return {};
  }
}
