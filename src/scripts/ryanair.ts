import cytoscape, { type Core, type ElementDefinition } from "cytoscape";
import state from "../data/ryanair-cytoscape-state.json";

const nodeStyle = {
  content: "data(id)",
  "border-style": "solid",
  "border-color": "black",
  "border-width": "1px",
  "background-color": "grey",
  color: "red",
};
const edgeStyle = { "curve-style": "bezier", width: 1, "line-color": "grey" };

function createGraph(container: HTMLElement, elements: ElementDefinition[], layout: cytoscape.LayoutOptions) {
  const graph = cytoscape({
    container,
    elements,
    userZoomingEnabled: true,
    minZoom: 0.1,
    maxZoom: 3,
    style: [
      { selector: "node", style: nodeStyle },
      { selector: "edge", style: edgeStyle },
      {
        selector: ".highlighted",
        style: {
          "background-color": "red",
          "line-color": "red",
          "target-arrow-color": "#61bffc",
          "transition-property": "background-color, line-color, target-arrow-color",
          "transition-duration": 500,
        },
      },
    ],
  });
  graph.fit();
  graph.layout(layout).run();
  return graph;
}

function revealGraph(container: HTMLElement) {
  container.classList.remove("blacked-background");
  container.querySelector(".to-remove")?.remove();
}

function animateDepthFirst(widget: HTMLElement, graph: Core, button: HTMLButtonElement) {
  button.disabled = true;
  const pathContainer = widget.querySelector<HTMLElement>("[data-ryanair-path]");
  const list = widget.querySelector<HTMLUListElement>("[data-ryanair-path-list]");
  if (!pathContainer || !list) {
    return;
  }

  list.replaceChildren();
  pathContainer.hidden = false;
  const path = graph.elements().dfs({ roots: "#SXF", directed: true }).path;
  path.removeClass("highlighted");
  let index = 0;

  const highlightNext = () => {
    if (index >= path.length) {
      button.disabled = false;
      return;
    }
    const element = path[index];
    element.addClass("highlighted");
    if (element.isNode()) {
      const item = document.createElement("li");
      item.textContent = element.id();
      list.append(item);
    } else {
      element.style("width", "8px");
    }
    index += 1;
    window.setTimeout(highlightNext, 250);
  };
  highlightNext();
}

export function initializeRyanairGraphs(widget: HTMLElement) {
  const allContainer = widget.querySelector<HTMLElement>("[data-all-airports]");
  const berlinContainer = widget.querySelector<HTMLElement>("[data-berlin-connections]");
  const validContainer = widget.querySelector<HTMLElement>("[data-valid-connections]");
  const dfsButton = widget.querySelector<HTMLButtonElement>("[data-ryanair-dfs]");
  if (!allContainer || !berlinContainer || !validContainer || !dfsButton) {
    return;
  }

  const allGraph = createGraph(allContainer, state as ElementDefinition[], { name: "concentric" });
  const source = allGraph.getElementById("SXF");
  const berlinElements = source.union(source.outgoers());
  const berlinGraph = createGraph(berlinContainer, berlinElements.jsons() as ElementDefinition[], { name: "circle", spacingFactor: 3 });

  const validGraph = createGraph(validContainer, berlinGraph.elements().jsons() as ElementDefinition[], {
    name: "circle",
    spacingFactor: 3,
  });
  const returnAirport = allGraph.getElementById("TSF");
  validGraph.nodes().forEach((node) => {
    if (node.id() !== "SXF" && allGraph.getElementById(node.id()).edgesTo(returnAirport).length === 0) {
      validGraph.remove(node);
    }
  });
  validGraph.fit();

  [allContainer, berlinContainer, validContainer].forEach(revealGraph);
  dfsButton.disabled = false;
  dfsButton.addEventListener("click", () => animateDepthFirst(widget, validGraph, dfsButton));
}
