var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var WeightedGraph = require('../utilities/weighted_graph');
var Heap = require('../utilities/heap');
var _ = require('underscore');

//TODO check why the Heap-based solution does not work well
var dijkstra = function (weightedGraph, source) {
  var distances = {};
  var seen = {};
  weightedGraph.getNodes().map(function (node) {
    distances[node] = 1000000;
    seen[node] = false;
  });
  distances[source] = 0;

  // var heap = new Heap(function (n) { return distances[n]; });
  // heap.push(source);
  var arr = [source];

  // while (heap.size() > 0) {
    // var u = heap.pop();
  while (arr.length > 0) {
    arr = _.sortBy(arr, function (o) { return distances[o]; });
    var u = arr.shift();
    seen[u] = true;
    var adjacents = weightedGraph.adjacentsOf(u);
    for (var j = 0; j < adjacents.length; j++) {
      var adjacentPair = adjacents[j];
      var end = adjacentPair.end;
      var weight = adjacentPair.weight;
      if (!seen[end] && (distances[end] > distances[u] + weight)) {
        distances[end] = distances[u] + weight;
        // heap.push(end);
        arr.push(end);
      }
    }
  }

  return distances;
};

var fromFile = function (file, source) {
  return fs.readFileAsync(file, 'utf-8')
    .then(function (data) {
      var edges = [];
      data
        .split('\r\n')
        .map(function (line) {
          var splits = line.split(' ');
          var startNode = splits[0];
          for (var i = 1; i < splits.length; i++) {
            var data = splits[i].split(',');
            var endNode = data[0];
            var weight = data[1];
            edges.push({ start: startNode, end: endNode, weight: weight });
          }
        });
      var weightedGraph = new WeightedGraph();
      weightedGraph.fromEdges(edges);
      return dijkstra(weightedGraph, source);
    });
};

module.exports = {
  fromFile: fromFile
};