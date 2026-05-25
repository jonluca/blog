import cytoscape, { type Core, type ElementDefinition } from "cytoscape";

function getRandomIntExcluding(min: number, max: number, excluded?: number) {
  let value = Math.floor(Math.random() * (max - min)) + min;
  while (value === excluded) {
    value = Math.floor(Math.random() * (max - min)) + min;
  }
  return value;
}

function buildNodes() {
  const nodes: ElementDefinition[] = [{ group: "nodes", data: { id: "0" } }];

  for (let index = 1; index < 25; index += 1) {
    nodes.push(
      { group: "nodes", data: { id: String(index) } },
      { group: "edges", data: { id: `e${index}`, source: String(index), target: String(getRandomIntExcluding(0, 25, index)) } },
      { group: "edges", data: { id: `es${index}`, source: String(index - 1), target: String(index) } },
    );
  }

  for (let index = 25; index < 50; index += 1) {
    nodes.push(
      { group: "nodes", data: { id: String(index) } },
      { group: "edges", data: { id: `e${index}`, source: String(index), target: String(getRandomIntExcluding(25, 50, index)) } },
      { group: "edges", data: { id: `er${index}`, source: String(index - 1), target: String(index) } },
    );
  }

  for (let index = 0; index < 3; index += 1) {
    nodes.push({
      group: "edges",
      data: { id: `bridge${index}`, source: String(getRandomIntExcluding(0, 25)), target: String(getRandomIntExcluding(25, 50)) },
    });
  }

  return nodes;
}

function createGraph(container: HTMLElement, nodes: ElementDefinition[]) {
  const graph = cytoscape({
    container,
    elements: nodes,
    userZoomingEnabled: false,
    style: [
      { selector: "node", style: { content: "data(id)" } },
      { selector: "edge", style: { "curve-style": "bezier", width: 4, "line-color": "#ddd" } },
      {
        selector: ".highlighted",
        style: {
          "background-color": "#61bffc",
          "line-color": "#61bffc",
          "target-arrow-color": "#61bffc",
          "transition-property": "background-color, line-color, target-arrow-color",
          "transition-duration": 500,
        },
      },
    ],
  });

  graph
    .nodes("[id<25]")
    .layout({ name: "concentric", boundingBox: { x1: 0, y1: 0, w: 250, h: 250 } })
    .run();
  graph
    .nodes("[id>25]")
    .layout({ name: "concentric", boundingBox: { x1: 500, y1: 0, w: 250, h: 250 } })
    .run();
  graph.fit();
  return graph;
}

function animateBreadthFirst(graph: Core) {
  const path = graph.elements().bfs({ roots: "#0", directed: true }).path;
  path.removeClass("highlighted");
  let index = 0;

  const highlightNext = () => {
    if (index < path.length) {
      path[index].addClass("highlighted");
      index += 1;
      window.setTimeout(highlightNext, 100);
    }
  };
  highlightNext();
}

export function initializeInformationGraphs(widget: HTMLElement) {
  const overview = document.getElementById("cy");
  const animated = widget.querySelector<HTMLElement>("[data-information-animation]");
  const button = widget.querySelector<HTMLButtonElement>("[data-information-start]");
  if (!overview || !animated || !button) {
    return;
  }

  const nodes = buildNodes();
  createGraph(overview, nodes);
  let animatedGraph = createGraph(animated, nodes);

  button.disabled = false;
  button.addEventListener("click", () => {
    animatedGraph.destroy();
    animatedGraph = createGraph(animated, nodes);
    animateBreadthFirst(animatedGraph);
  });
}
