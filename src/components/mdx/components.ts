import Blockquote from "./Blockquote.astro";
import CustomImage from "./CustomImage.astro";
import H1 from "./H1.astro";
import H2 from "./H2.astro";
import H3 from "./H3.astro";
import H4 from "./H4.astro";
import H5 from "./H5.astro";
import H6 from "./H6.astro";
import Link from "./Link.astro";
import MediaImage from "./MediaImage.astro";
import Table from "./Table.astro";
import ScrollableTable from "./ScrollableTable.astro";
import Video from "./Video.astro";
import ClockContent from "../widgets/ClockContent.astro";
import Gist from "../widgets/Gist.astro";
import Information from "../widgets/Information.astro";
import InformationGraph from "../widgets/InformationGraph.astro";
import RyanairApp from "../widgets/RyanairApp.astro";
import SpfDkimCharts from "../widgets/SpfDkimCharts.astro";

export const mdxComponents = {
  a: Link,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: MediaImage,
  table: ScrollableTable,
  ClockContent,
  CustomImage,
  Gist,
  Image: CustomImage,
  Information,
  InformationGraph,
  MediaImage,
  RyanairApp,
  SpfDkimCharts,
  Table,
  Video,
};
