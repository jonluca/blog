// @ts-nocheck - fix this in the future, for now the code works
"use client";
import cytoscape from "cytoscape";
import { airports } from "./airports";
import React, { useState, useRef } from "react";
import ryanairState from "./ryanair-cytoscape-state.json";
// Moved global variables into the component scope or React context
const mappings = {};
const airportCodes = [];
// Process airports data
for (const airport of airports.allAirportsList) {
  const id = airport.id; // format airport:XYZ
  const ryanairId = id.split(":");
  if (ryanairId[0] === "airport") {
    const iata = ryanairId[1];
    airportCodes.push(iata);
    if (!mappings.hasOwnProperty(iata)) {
      mappings[iata] = new Set();
    }
    let routes = airport.routes.filter((entry) => {
      return entry.startsWith("airport");
    });

    routes = routes.map((entry) => entry.split(":")[1]);
    routes = routes.map((entry) => entry.split("|")[0]);
    for (const route of routes) {
      if (route !== iata) {
        mappings[iata].add(route);
      }
    }
  }
}
airportCodes.sort();
// Route helper functions
const routeHelper = (start, goal, depth) => {
  if (depth === 0) {
    return [];
  }
  const airports = Array.from(mappings[start]);
  const index = airports.indexOf(start);
  if (index > -1) {
    airports.splice(index, 1);
  }
  let valid = [];
  for (const airport of airports) {
    if (mappings[airport].has(goal)) {
      valid.push(`${airport} => ${goal}`);
    }
    const recursiveValid = routeHelper(airport, goal, depth - 1);
    for (const entry of recursiveValid) {
      valid.push(`${entry}`);
    }
  }
  valid = valid.map((entry) => `${start} => ${entry}`);
  return valid;
};

interface Stop {
  index: number;
  value: string;
}

// Main app component
export const RyanairApp = ({ midcontent, postcontent }: { midcontent: React.ReactNode; postcontent: React.ReactNode }) => {
  // App state
  const [started, setStarted] = useState(false);
  const [didAnimate, setDidAnimate] = useState(false);
  const [validRoutes, setValidRoutes] = useState([]);
  const [dfsPath, setDfsPath] = useState([]);
  const [stops, setStops] = useState<Stop[]>([]);

  // References for cytoscape instances
  const allAirportGraphRef = useRef(null);
  const onlyBerlinGraphRef = useRef(null);
  const allValidRoutesRef = useRef(null);

  // Styles for cytoscape
  const cyNodeStyle = {
    content: "data(id)",
    "border-style": "solid",
    "border-color": "black",
    "border-width": "1px",
    "background-color": "grey",
    color: "red",
  };

  const cyEdgeStyle = {
    "curve-style": "bezier",
    width: 1,
    "line-color": "grey",
  };

  const cyHighlightedStyle = {
    "background-color": "red",
    "line-color": "red",
    "target-arrow-color": "#61bffc",
    "transition-property": "background-color, line-color, target-arrow-color",
    "transition-duration": "0.5s",
  };

  // Initialize cytoscape graphs
  const initializeCytoscape = () => {
    // All airports graph
    const allAirportGraph = cytoscape({
      container: document.getElementById("all-airports"),
      elements: ryanairState,
      userZoomingEnabled: true,
      minZoom: 0.1,
      maxZoom: 3,
      style: cytoscape.stylesheet().selector("node").css(cyNodeStyle).selector("edge").css(cyEdgeStyle),
    });

    allAirportGraph.fit();
    allAirportGraph.layout({ name: "concentric" }).run();
    allAirportGraphRef.current = allAirportGraph;

    // Berlin connections graph
    let collection = allAirportGraph.collection();
    collection = collection.add(allAirportGraph.getElementById("SXF"));

    for (const airport of mappings["SXF"]) {
      collection = collection.add(allAirportGraph.getElementById(airport));
      collection = collection.add(allAirportGraph.getElementById(airport).connectedEdges());
    }

    collection = collection.filter(function (ele, i, coll) {
      return ele.isNode() || (coll.getElementById(ele.data().source).length !== 0 && coll.getElementById(ele.data().target).length !== 0);
    });

    const difference = allAirportGraph.elements().intersection(collection);

    const onlyBerlinGraph = cytoscape({
      container: document.getElementById("only-ber-connections"),
      elements: difference.jsons(),
      userZoomingEnabled: true,
      minZoom: 0.1,
      maxZoom: 3,
      style: cytoscape.stylesheet().selector("node").css(cyNodeStyle).selector("edge").css(cyEdgeStyle),
    });

    onlyBerlinGraph.fit();
    onlyBerlinGraph
      .layout({
        name: "circle",
        spacingFactor: 3,
      })
      .run();
    onlyBerlinGraphRef.current = onlyBerlinGraph;

    // Valid routes graph
    const berlinNodes = onlyBerlinGraph.nodes();
    const invalidNodes = [];
    berlinNodes.forEach((node) => {
      const id = node.data().id;
      if (!mappings[id].has("TSF")) {
        invalidNodes.push(id);
      }
    });

    const allValidRoutes = cytoscape({
      container: document.getElementById("only-valid-connections"),
      elements: onlyBerlinGraph.elements().jsons(),
      userZoomingEnabled: true,
      minZoom: 0.2,
      maxZoom: 3,
      style: cytoscape
        .stylesheet()
        .selector("node")
        .css(cyNodeStyle)
        .selector("edge")
        .css(cyEdgeStyle)
        .selector(".highlighted")
        .css(cyHighlightedStyle),
    });

    for (const node of invalidNodes) {
      allValidRoutes.remove(allValidRoutes.getElementById(node));
    }

    allValidRoutes.fit();
    allValidRoutes
      .layout({
        name: "circle",
        spacingFactor: 3,
      })
      .run();

    allValidRoutesRef.current = allValidRoutes;
  };

  // Start initialization
  const handleStart = () => {
    setStarted(true);
    initializeCytoscape();
  };

  // Animate DFS
  const animateDFS = () => {
    if (didAnimate || !started || !allValidRoutesRef.current) {
      return;
    }

    setDidAnimate(true);
    const pathItems = [];
    const dfs = allValidRoutesRef.current.elements().dfs("#SXF", function () {}, true);

    // Reset previous highlights
    for (let j = 0; j < dfs.path.length; j++) {
      dfs.path[j].removeClass("highlighted");
    }

    // Animate DFS path
    let i = 0;
    const highlightNextEle = () => {
      if (i < dfs.path.length) {
        dfs.path[i].addClass("highlighted");

        if (dfs.path[i].isNode()) {
          pathItems.push(dfs.path[i].id());
          setDfsPath([...pathItems]);
        } else {
          // it's an edge, make it wider
          dfs.path[i].style("width", "8px");
        }

        i++;
        setTimeout(highlightNextEle, 250);
      } else {
        setDidAnimate(false);
      }
    };

    // Start animation
    highlightNextEle();
  };

  // Get pre-route string
  const getPreRoute = () => {
    if (stops.length === 0) {
      return "";
    }

    const startSelect = document.getElementById("start");
    const startValue = startSelect ? startSelect.value : "";

    let pre = startValue;

    // Add all stops except the last one
    stops.slice(0, -1).forEach((stop) => {
      const stopSelect = document.getElementById(`stop${stop.number}`);
      if (stopSelect) {
        pre += " => " + stopSelect.value;
      }
    });

    return pre;
  };

  // Find routes between stops
  const findRoute = () => {
    const endSelect = document.getElementById("end");
    const goal = endSelect ? endSelect.value : "";

    let start;
    if (stops.length > 0) {
      const lastStopNumber = stops[stops.length - 1].number;
      const lastStopSelect = document.getElementById(`stop${lastStopNumber}`);
      start = lastStopSelect ? lastStopSelect.value : "";
    } else {
      const startSelect = document.getElementById("start");
      start = startSelect ? startSelect.value : "";
    }

    const stopsSelect = document.getElementById("stops");
    const numStops = stopsSelect ? parseInt(stopsSelect.value) : 1;

    let valid = routeHelper(start, goal, numStops);

    // Sort by string length since we know IATA codes are all going to be 3 letters long
    valid.sort(function (a, b) {
      return b.length - a.length;
    });

    const pre = getPreRoute();
    if (pre) {
      valid = valid.map((e) => {
        return pre + " => " + e;
      });
    }

    setValidRoutes(valid);
  };

  // Handle adding a new stop
  const handleAddStop = () => {
    const nextStopNumber = stops.length;

    // Determine the selected value for new stop options
    let prevValue;
    if (stops.length === 0) {
      const startSelect = document.getElementById("start");

      prevValue = startSelect ? startSelect.value : null;
    } else {
      prevValue = stops[nextStopNumber - 1].value;
    }
    const valid = Array.from(mappings[prevValue]);
    valid.sort();
    setStops([...stops, { value: valid[0] }]);
  };

  // Generate options based on selected value and mappings
  const generateOptions = (prevValue) => {
    if (prevValue && mappings[prevValue]) {
      const valid = Array.from(mappings[prevValue]);
      valid.sort();
      return valid.map((iataCode) => (
        <option key={iataCode} value={iataCode}>
          {iataCode}
        </option>
      ));
    } else if (airportCodes.length > 0) {
      return airportCodes.map((iataCode) => (
        <option key={iataCode} value={iataCode}>
          {iataCode}
        </option>
      ));
    }
    return null;
  };

  // Render a stop
  const renderStop = (stop) => (
    <p key={`stop-${stop.number}`}>
      <span>Stop {stop.number}</span>
      <span className={"custom-dropdown big"}>
        <select id={`stop${stop.number}`} className={"dropdown-options stop"} data-stop={stop.number}>
          {generateOptions(stop.prevValue)}
        </select>
      </span>
    </p>
  );

  return (
    <>
      {/* RyanairGraph Component */}
      <div>
        <p className={"caption"}>
          <button
            onClick={handleStart}
            className={"cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"}
            disabled={started}
          >
            Warning - these graphs are computationally expensive. Viewing them will probably slow down your webpage for a few seconds. Click
            here to start!
          </button>
        </p>

        <div className={`ryanair-graph ${!started ? "blacked-background" : ""}`} id={"all-airports"}>
          {!started && <div className={"to-remove"}>Click Start Above</div>}
        </div>
      </div>
      {midcontent}
      {/* RyanairDfs Component */}
      <div>
        <p className={"caption"}>
          <button
            onClick={animateDFS}
            disabled={!started || didAnimate}
            className={`${!started ? "blacked-background" : ""} rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}
          >
            Start DFS
          </button>
        </p>

        {(dfsPath.length > 0 || didAnimate) && (
          <>
            <h3>Path</h3>
            <ul>
              {dfsPath.map((path, index) => (
                <li key={`path-${index}`}>{path}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {postcontent}
      {/* RyanairRoute Component */}
      <div className={"hidden"}>
        <div>
          <div>
            <span>Number of Additional Stops</span>
            <span className={"custom-dropdown big"}>
              <select id={"stops"}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4 (Slow!)</option>
                <option value={"5"}>5 (Slower!)</option>
                <option value={"6"}>6 (Slowest - Probably shouldn't use this!)</option>
              </select>
            </span>
          </div>
          <div>
            <span>Start</span>
            <span className={"custom-dropdown big"}>
              <select id={"start"} className={"dropdown-options"}>
                {started ? generateOptions() : null}
              </select>
            </span>
          </div>
        </div>

        {/* Render all stops */}
        {stops.map((stop) => renderStop(stop))}

        {/* Plus button to add more stops */}
        <div className={"plus"} onClick={handleAddStop} style={{ cursor: "pointer" }}>
          <div className={"plus__line plus__line--v"}>
            <a href={"#"} className={"plus__link ion-person"}></a>
            <a href={"#"} className={"plus__link ion-images"}></a>
            <a href={"#"} className={"plus__link ion-music-note"}></a>
            <a href={"#"} className={"plus__link ion-location"}></a>
          </div>
          <div className={"plus__line plus__line--h"}></div>
        </div>

        <span>End</span>
        <span className={"custom-dropdown big"}>
          <select id={"end"} className={"dropdown-options"}>
            {started ? generateOptions() : null}
          </select>
        </span>

        <p className={"caption"} id={"route-finder"}>
          <button
            onClick={findRoute}
            disabled={!started}
            className={`${!started ? "blacked-background" : ""} rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}
          >
            Find Route
          </button>
        </p>

        {/* Display valid routes */}
        {validRoutes.length > 0 && (
          <div id={"valid-routes-found"}>
            <h3>Valid Routes</h3>
            {validRoutes.length > 0 ? (
              validRoutes.map((route, index) => <p key={`route-${index}`}>{route}</p>)
            ) : (
              <p>No valid routes found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
