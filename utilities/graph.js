var fs = require('fs');

function Graph(file) {
  this.edges = [];
  this.verticesCount = 0;
  if (file)
    this.fromFile(file);
}

Graph.prototype.isEdgeInGraph = function (start, end, graph) {
  if (graph[start] && graph[start].indexOf(end) > -1)
    return true;
  if (graph[end] && graph[end].indexOf(start) > -1)
    return true;
  return false;
};

Graph.prototype.clone = function (fromg) {
  this.edges = fromg.edges.map(function(arr) {
    return arr.slice();
  });
  this.verticesCount = fromg.verticesCount;
  return this;
};

Graph.prototype.fromFile = function (file) {
  var data = fs.readFileSync(file);
  var vertices = data.toString().split("\r\n");
  var graph = {};
  for (var i = 0; i < vertices.length; i++) {
    var verticesData = vertices[i].split(' ');
    var startingNode = verticesData[0];
    this.verticesCount++;
    var endingNodes = verticesData.splice(1);
    graph[startingNode] = [];
    for (var j = 0; j < endingNodes.length; j++) {
      if (startingNode === endingNodes[j]) {
        break; //won't count edges that start & end in the same node
      }
      // if there is an edge u->v don't add v->u
      if (!this.isEdgeInGraph(startingNode, endingNodes[j], graph)) {
        graph[startingNode].push(endingNodes[j]);
        this.edges.push([startingNode, endingNodes[j]]);
      }
    }
    if (graph[startingNode].length === 0) {
      delete graph[startingNode];
    }

  }
};

Graph.prototype.contract = function (start, end) {
  // replace "end" by "start" in all adjacency lists

  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === end) {
      this.edges[i][0] = start;
    }
    if (this.edges[i][1] === end) {
      this.edges[i][1] = start;
    }
  }

  // remove self-loops in "edges"
  this.edges = this.edges.filter(function (edge) {
    return (edge[0] !== edge[1]);
  });

  this.verticesCount--;
};

Graph.prototype.toString = function () {
  var result = '';
  for (var i = 0; i < this.edges.length; i++) {
    result += '[' + this.edges[i][0] + ', ' + this.edges[i][1] + ']';
  }
  result += ' --> ' + (this.edges.length + ' edges, ' + this.verticesCount + ' vertices');
  return result;
};

module.exports = Graph;