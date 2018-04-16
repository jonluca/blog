let nodes = [];

nodes.push({
  group: "nodes",
  data: {id: 0}
});

/*Generate first cluster of 25 nodes*/

for (let i = 1; i < 25; i++) {
  nodes.push({
    group: "nodes",
    data: {id: i}
  }, {
    group: "edges",
    data: {
      id: `e${i}`,
      source: i,
      target: getRandomIntExcludingOrig(0, 25, i)
    }
  }, {
    group: "edges",
    data: {
      id: `es${i}`,
      source: i - 1,
      target: i
    }
  });
}
/*Generate second cluster of 25 nodes*/

for (let i = 25; i < 50; i++) {
  nodes.push({
    group: "nodes",
    data: {id: i}
  }, {
    group: "edges",
    data: {
      id: `e${i}`,
      source: i,
      target: getRandomIntExcludingOrig(25, 50, i)
    }
  }, {
    group: "edges",
    data: {
      id: `er${i}`,
      source: i - 1,
      target: i
    }
  });
}

/*Generate some random pairings between the two clusters*/
for (let i = 0; i < 6; i++) {
  let firstNode = getRandomIntExcludingOrig(0, 25);
  let secondNode = getRandomIntExcludingOrig(25, 50);
  nodes.push({
    group: "edges",
    data: {
      id: `er${i}`,
      source: firstNode,
      target: secondNode
    }
  });
}

function createGraphWithSelector(sel) {
  let cy = cytoscape({
    container: document.getElementById(sel), // container to render in
    elements: nodes,
    userZoomingEnabled: false,
    style: cytoscape.stylesheet()
      .selector('node')
      .css({
        'content': 'data(id)'
      })
      .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 4,
        'line-color': '#ddd'
      })
      .selector('.highlighted')
      .css({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      })
  });
  cy.nodes("[id<25]").layout({
    name: 'concentric',
    boundingBox: {
      x1: 0,
      y1: 0,
      w: 250,
      h: 250
    }
  }).run();
  cy.nodes("[id>25]").layout({
    name: 'concentric',
    boundingBox: {
      x1: 500,
      y1: 0,
      w: 250,
      h: 250
    }
  }).run();

  cy.fit();
  return cy;
}

let cy = createGraphWithSelector('cy');
let cyAnimated = createGraphWithSelector('cyTime');

function animateBFS() {
  let bfs = cyAnimated.elements().bfs('#0', function () {
  }, true);

  let i = 0;
  let highlightNextEle = function () {
    if (i < bfs.path.length) {
      bfs.path[i].addClass('highlighted');
      i++;
      setTimeout(highlightNextEle, 100);
    }
  };

// kick off first highlight
  highlightNextEle();
}

function getRandomIntExcludingOrig(min, max, orig) {
  let rand = Math.floor(Math.random() * (max - min)) + min;
  while (rand === orig) {
    rand = Math.floor(Math.random() * (max - min)) + min;
  }
  return rand;
}