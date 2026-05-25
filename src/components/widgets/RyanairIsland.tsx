import { DeferredRyanairApp } from "../../../app/custom-code/DeferredRyanairApp";

function RyanairMidContent() {
  return (
    <>
      <p>
        We could now visualize a graph of every airport and its destinations. This was significantly more than I was expecting - the graph
        is almost unusable there are so many connections (there are 4223 edges!). We'd need to filter this more to remove all airports that
        did not satisfy our conditions.
      </p>
      <div
        className={"ryanair-graph blacked-background"}
        id={"only-ber-connections"}
        role={"img"}
        aria-label={"Graph of flight connections from Berlin Schönefeld"}
      >
        <div className={"to-remove"}>Click Start Above</div>
      </div>
      <p>
        This is a graph that only shows outgoing connections from <code>SXF</code>, Berlin Schönefeld. However, this shows us destinations
        that might not connect to <code>TSF</code>. We want a list of potential cities that are reachable from Berlin and will fly to{" "}
        <code>TSF</code>, Venice Treviso.
      </p>
      <div
        className={"ryanair-graph blacked-background"}
        id={"only-valid-connections"}
        role={"img"}
        aria-label={"Graph of routes that can return to Venice Treviso"}
      >
        <div className={"to-remove"}>Click Start Above</div>
      </div>
      <p>
        And there we have our graph! All valid connections that go <code>TSF -&gt; SXF -&gt; ??? -&gt; TSF</code>. The best part of this is
        that all the above airports fly to <code>TSF</code> - we can add many more airports to our trip this way. Any path in the graph
        above lets us return to <code>TSF</code>, so a depth-first search can compute the full path to every node.
      </p>
    </>
  );
}

function RyanairPostContent() {
  return (
    <>
      <h2 id={"deciding-on-cities"} className={"font-semibold text-black"}>
        Deciding on cities
      </h2>
      <p>
        The graphs above are a cool visual representation, but our end goal is really just a list of possible voyages - something like{" "}
        <code>TSF -&gt; SXF -&gt; MLA -&gt; TSF</code>. The full list is here:
      </p>
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
      </ul>
    </>
  );
}

const ryanairMidContent = <RyanairMidContent />;
const ryanairPostContent = <RyanairPostContent />;

export default function RyanairIsland() {
  return <DeferredRyanairApp midcontent={ryanairMidContent} postcontent={ryanairPostContent} />;
}
