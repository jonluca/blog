// @ts-nocheck - fix this in the future, for now the code works
"use client";

import type { ElementDefinition, ElementsDefinition } from "cytoscape";
import cytoscape from "cytoscape";
import { useEffect } from "react";

const nodes: ElementsDefinition | ElementDefinition[] | Promise<ElementsDefinition> | Promise<ElementDefinition[]> = [];

nodes.push({
  group: "nodes",
  data: { id: 0 },
});

/*Generate first cluster of 25 nodes*/

for (let i = 1; i < 25; i++) {
  nodes.push(
    {
      group: "nodes",
      data: { id: i },
    },
    {
      group: "edges",
      data: {
        id: `e${i}`,
        source: i,
        target: getRandomIntExcludingOrig(0, 25, i),
      },
    },
    {
      group: "edges",
      data: {
        id: `es${i}`,
        source: i - 1,
        target: i,
      },
    },
  );
}
/*Generate second cluster of 25 nodes*/

for (let i = 25; i < 50; i++) {
  nodes.push(
    {
      group: "nodes",
      data: { id: i },
    },
    {
      group: "edges",
      data: {
        id: `e${i}`,
        source: i,
        target: getRandomIntExcludingOrig(25, 50, i),
      },
    },
    {
      group: "edges",
      data: {
        id: `er${i}`,
        source: i - 1,
        target: i,
      },
    },
  );
}

/*Generate some random pairings between the two clusters*/
for (let i = 0; i < 3; i++) {
  const firstNode = getRandomIntExcludingOrig(0, 25);
  const secondNode = getRandomIntExcludingOrig(25, 50);
  nodes.push({
    group: "edges",
    data: {
      id: `er${i}`,
      source: firstNode,
      target: secondNode,
    },
  });
}

function createGraphWithSelector(sel) {
  const cy = cytoscape({
    container: document.getElementById(sel), // container to render in
    elements: nodes,
    userZoomingEnabled: false,
    style: cytoscape
      .stylesheet()
      .selector("node")
      .css({
        content: "data(id)",
      })
      .selector("edge")
      .css({
        "curve-style": "bezier",
        width: 4,
        "line-color": "#ddd",
      })
      .selector(".highlighted")
      .css({
        "background-color": "#61bffc",
        "line-color": "#61bffc",
        "target-arrow-color": "#61bffc",
        "transition-property": "background-color, line-color, target-arrow-color",
        "transition-duration": "0.5s",
      }),
  });
  cy.nodes("[id<25]")
    .layout({
      name: "concentric",
      boundingBox: {
        x1: 0,
        y1: 0,
        w: 250,
        h: 250,
      },
    })
    .run();
  cy.nodes("[id>25]")
    .layout({
      name: "concentric",
      boundingBox: {
        x1: 500,
        y1: 0,
        w: 250,
        h: 250,
      },
    })
    .run();

  cy.fit();
  return cy;
}

function getRandomIntExcludingOrig(min, max, orig) {
  let rand = Math.floor(Math.random() * (max - min)) + min;
  while (rand === orig) {
    rand = Math.floor(Math.random() * (max - min)) + min;
  }
  return rand;
}

export const InformationGraph = () => {
  useEffect(() => {
    createGraphWithSelector("cy");
    createGraphWithSelector("cyTime");
  }, []);

  function animateBFS() {
    const cyAnimated = createGraphWithSelector("cyTime");

    const bfs = cyAnimated.elements().bfs("#0", function () {}, true);

    let i = 0;
    const highlightNextEle = function () {
      if (i < bfs.path.length) {
        bfs.path[i].addClass("highlighted");
        i++;
        setTimeout(highlightNextEle, 100);
      }
    };

    // kick off first highlight
    highlightNextEle();
  }
  return (
    <>
      <div className={"graph"} id={"cyTime"}></div>
      <button onClick={animateBFS} className={"cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"}>
        Start Animation
      </button>
    </>
  );
};
