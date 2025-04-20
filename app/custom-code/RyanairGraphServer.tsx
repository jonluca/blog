import React from "react";
import { CustomMDX } from "../components/mdx";
import { RyanairApp } from "./RyanairGraph";

// Main app component
export const RyanairMidContent = () => {
  return (
    <>
      <CustomMDX
        source={`We could now visualize a graph of every airport and it's destinations. This was significantly more than I was expecting - the graph is almost unusable there are so many connections (there are 4223 edges!). We'd need to filter this more to remove all airports that did not satisfy our conditions.`}
      />
      <div className={"ryanair-graph blacked-background"} id={"only-ber-connections"}>
        <div className={"to-remove"}>Click Start Above</div>
      </div>
      <CustomMDX
        source={`This is a graph that only shows outgoing connections from \`SXF\`, Berlin Schönefeld. However, this shows us destinations that might not connect to \`TSF\`.

      We want a list of potential cities that A) Are reachable from Berlin and B) Will fly to \`TSF\`, Venice Treviso.

      We can just check each of the airports in the above graph and cross reference it with our original \`mappings\` - if \`TSF\` is not in the mapping, then we can remove it and all it's edges from the graph.
      `}
      />
      <div className={"ryanair-graph blacked-background"} id={"only-valid-connections"}>
        <div className={"to-remove"}>Click Start Above</div>
      </div>
      <CustomMDX
        source={`And there we have our graph! All valid connections that go \`TSF -> SXF -> ??? -> TSF\`. The best part of this is that _all_ the above airports fly to \`TSF\` - we can add many more airports to our trip this way. We know that
      any path in the graph above lets us return to \`TSF\`, which means we can do a trip with \`N\` many distinct stops, where N is the length
      of the longest non repeating path[^1]! We can also run a Depth First Search from \`SXF\` to compute the full path to every node.`}
      />
    </>
  );
};
export const RyanairPostContent = () => {
  return (
    <>
      <CustomMDX
        source={`## Deciding on cities

      The graphs above are a cool visual representation but our end goal is really just a list of possible voyages - something like \`TSF -> SXF -> MLA -> TSF\`. The full list is here:

      <ul>
        <li>AGP - Malaga, Spain</li>
        <li>BRI - Bari, Italy</li>
        <li>BRU - Brussels, Belgium</li>
        <li>BUD - Budapest, Hungary</li>
        <li>CGN - Cologne, Germany</li>
        <li>CTA - Catania, Italy</li>
        <li>DUB - Dublin, Ireland</li>
        <li>EDI - Edinburgh, United Kingdom</li>
        <li>EMA - East Midlands, United Kingdom</li>
        <li>KRK - Krakow, Poland</li>
        <li>LPA - Gran Canaria, Spain</li>
        <li>MAN - Manchester, United Kingdom</li>
        <li>MLA - Malta, Malta</li>
        <li>OPO - Porto, Portugal</li>
        <li>PMO - Palermo, Italy</li>
        <li>RAK - Marrakesh, Morocco</li>
        <li>SOF - Sofia, Bulgaria</li>
        <li>STN - London Stansted, United Kingdom</li>
        <li>SVQ - Seville, Spain</li>
        <li>SXF - Berlin Schönefeld, Germany</li>
        <li>TFS - Tenerife South, Spain</li>
        <li>VLC - Valencia, Spain</li>
        <li>VNO - Vilnius, Lithuania</li>
      </ul>`}
      />
      {/*<CustomMDX*/}
      {/*  source={`    ## Cycles, NP-Complete-ness, and arbitrary airports*/}

      {/*I thought it would be fun to see if we could actually find a Hamiltonian Cycle in the graph. Unfortunately, with 242 airports and over 4000 routes this would be nearly impossible to compute. It's actually not that bad to find it in the final graph below, though - although it _is_ NP-Complete, when a graph is as connected with as many edges as above it's actually not that difficult to find.*/}

      {/*I also wrote the tool below to compute cycles up to 4 airports in length, starting and ending from a set airport.`}*/}
      {/*/>*/}
    </>
  );
};
export const RyanairMainApp = () => {
  return <RyanairApp midcontent={<RyanairMidContent />} postcontent={<RyanairPostContent />} />;
};
