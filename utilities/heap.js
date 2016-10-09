function binaryHeap(comp) {
  this.score = comp;
  this.arr = [];
}

binaryHeap.prototype.swap = function (a, b) {
  var temp = this.arr[a];
  this.arr[a] = this.arr[b];
  this.arr[b] = temp;
};

binaryHeap.prototype.bubbleDown = function (pos) {
  var left = 2 * pos + 1;
  var right = left + 1;
  var largest = pos;
  if (left < this.arr.length && this.score(this.arr[left]) < this.score(this.arr[largest])) {
    largest = left;
  }
  if (right < this.arr.length && this.score(this.arr[right]) < this.score(this.arr[largest])) {
    largest = right;
  }
  if (largest != pos) {
    this.swap(largest, pos);
    this.bubbleDown(largest);
  }
};

binaryHeap.prototype.bubbleUp = function (pos) {
  if (pos <= 0) {
    return;
  }
  var parent = Math.floor((pos - 1) / 2);
  if (this.score(this.arr[pos]) < this.score(this.arr[parent])) {
    this.swap(pos, parent);
    this.bubbleUp(parent);
  }
};


binaryHeap.prototype.pop = function () {
  // Store the first element so we can return it later.
  var result = this.arr[0];
  // Get the element at the end of the array.
  var end = this.arr.pop();
  // If there are any elements left, put the end element at the
  // start, and let it sink down.
  if (this.arr.length > 0) {
    this.arr[0] = end;
    this.bubbleDown(0);
  }
  return result;
};

binaryHeap.prototype.push = function (value) {
  this.arr.push(value);
  this.bubbleUp(this.arr.length - 1);
};

binaryHeap.prototype.size = function () {
  return this.arr.length;
};

module.exports = binaryHeap;