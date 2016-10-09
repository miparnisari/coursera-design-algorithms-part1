function AdjacencyList() {
  this.nodes = {};
  this.explored = {};
  this.finishingTimesStack = [];
}

AdjacencyList.prototype.edgesCount = function () {
  var total = 0;
  for (var key in this.nodes) {
    total += (this.nodes[key].length);
  }
  return total;
};

AdjacencyList.prototype.nodeCount = function () {
  return Object.keys(this.nodes).length;
};

AdjacencyList.prototype.addEdge = function (start, end) {
  if (!this.nodes[start]) {
    this.nodes[start] = [end];
  } else {
    this.nodes[start].push(end);
  }
};

AdjacencyList.prototype.wasExplored = function (value) {
  return this.explored[value];
};

AdjacencyList.prototype.markExplored = function (value) {
  this.explored[value] = true;
};

AdjacencyList.prototype.markAllUnexplored = function () {
  for (var key in this.nodes) {
    this.explored[key] = false;
  }
};

AdjacencyList.prototype.bfs = function (source) {
  this.markExplored(source);
  var queue = [];
  queue.push(source);
  while (queue.length > 0) {
    var v = queue.shift();
    var edges = this.nodes[v];
    for (var i = 0; i < edges.length; i++) {
      var w = edges[i];
      if (!this.wasExplored(w)) {
        this.markExplored(w);
        queue.push(w);
      }
    }
  }
};

AdjacencyList.prototype.dfs = function (source) {
  var stack = [source];
  var time = 0;
  var finishingTimes = {};
  var that = this;
  while (stack.length > 0) {
    var v = stack.pop();
    if (!this.wasExplored(v)) {
      this.markExplored(v);
      var edges = this.nodes[v] || [];
      stack.push(v);
      edges.map(function (e) {
        if (!that.wasExplored(e)) {
          stack.push(e);
        }
      });
    } else {
      if (!finishingTimes[v]) {
        time++;
        finishingTimes[v] = time;
        this.finishingTimesStack.push(v);
      }
    }
  }
};

AdjacencyList.prototype.dfsLeader = function (leader) {
  var connectedComponent = [];
  var stack = [leader];
  while (stack.length > 0) {
    var v = stack.pop();
    if (!this.wasExplored(v)) {
      this.markExplored(v);
      connectedComponent.push(v);
      var edges = this.nodes[v] || [];
      var that = this;
      edges.map(function (w) {
        if (!that.wasExplored(w)) {
          stack.push(w);
        }
      });
    }
  }
  return connectedComponent;
};

module.exports = AdjacencyList;