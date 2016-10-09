var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var AdjacencyList = require('../utilities/graph_adj_list');

var buildAdjacencyList = function (edges) {
  // edges is an array of objects [u,v]
  var adjacencyList = new AdjacencyList();
  edges.map(function (edge) {
    adjacencyList.addEdge(edge[0], edge[1]);
  });
  return adjacencyList;
};

var buildReverseAdjacencyList = function (edges) {
  edges = edges.map(function (edge) {
    return [edge[1], edge[0]];
  });
  return buildAdjacencyList(edges);
};

// kosaraju's two-pass algorithm
var sccs = function (edges) {
  var adjacencyList = buildAdjacencyList(edges);
  console.log("# nodes: " + adjacencyList.nodeCount());
  // 1) reverse the graph
  var reverseAdjacencyList = buildReverseAdjacencyList(edges);
  // 2) run dfs on the reversed graph
  reverseAdjacencyList.markAllUnexplored();
  var nEdges = reverseAdjacencyList.edgesCount();
  for (var i = 1; i < nEdges; i++) {
    if (!reverseAdjacencyList.wasExplored(i)) {
      reverseAdjacencyList.dfs(i);
    }
  }
  // 3) run dfs on the real graph
  var sccs = [];
  adjacencyList.markAllUnexplored();
  while (reverseAdjacencyList.finishingTimesStack.length > 0) {
    var elem = reverseAdjacencyList.finishingTimesStack.pop();
    if (!adjacencyList.wasExplored(elem)) {
      sccs.push(adjacencyList.dfsLeader(elem));
    }
  }
  // 4) print results
  return sccs.sort(function (a, b) {
    return b.length - a.length;
  }).map(function (c) {
    return c.length;
  });
};

var fromFile = function (file) {
  return fs.readFileAsync(file, 'utf-8')
    .then(function (data) {
      var edges = data
        .split('\n')
        .map(function (s) {
          s = s.split(' ');
          s[0] = parseInt(s[0]);
          s[1] = parseInt(s[1]);
          return s;
        })
        .filter(function (edge) {
          return (edge[0] !== edge[1]);
        });
      console.log("# edges: " + edges.length);
      return sccs(edges);
    });
};

module.exports = {
  fromFile: fromFile
};