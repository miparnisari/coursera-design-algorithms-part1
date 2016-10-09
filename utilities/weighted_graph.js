var _ = require('underscore');

function WeightedGraph() {
  this.nodes = {}; // 'node start': [{'node end', 'weight'}]
}

// returns an array of nodes
WeightedGraph.prototype.getNodes = function () {
  return Object.keys(this.nodes);
};

// returns an array of adjacent nodes and their weights
WeightedGraph.prototype.adjacentsOf = function (node) {
  return this.nodes[node];
};

WeightedGraph.prototype.fromEdges = function (edges) {
  var that = this;
  edges.map(function (edge) {
    if (!that.nodes[edge.end]) {
      that.nodes[edge.end] = [];
    }
    if (!that.nodes[edge.start]) {
      that.nodes[edge.start] = [];
    }
    that.nodes[edge.start].push({ end: edge.end, weight: parseInt(edge.weight) });
  });
};

module.exports = WeightedGraph;