var Graph = require('../utilities/graph');

var findOne = function (graph) {
  var verticesCount = graph.verticesCount;
  for (var i = 0; i < verticesCount - 2; i++) {
    // pick random edge u-var
    var randomIndex = Math.floor(Math.random() * (graph.edges.length - 1));
    var randomEdge = graph.edges[randomIndex];
    var start = randomEdge[0];
    var end = randomEdge[1];
    // contract
    graph.contract(start, end);
  }
  return graph.edges.length;
};

var findMinimumFromFile = function (file, iterations) {
  var minLength = 99999999999;
  var graph = new Graph(file);
  for (var i = 0; i < iterations; i++) {
    var copy = new Graph();
    copy.clone(graph);
    var newMinLength = Math.min(minLength, findOne(copy));
    if (minLength !== newMinLength)
      console.log('new minimum found: ' + newMinLength);
    minLength = newMinLength;
  }
  return minLength;
};

module.exports = {
  findMinimumFromFile: findMinimumFromFile
};