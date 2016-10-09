var utilities = require('../utilities/util');

var partition = function (array, start, end) {
  var p = array[start];
  if (start !== 0) {
    utilities.swap(array, 0, start);
    start = 0;
  }
  var i = start + 1;
  for (var j = start + 1; j <= end; j++) {
    if (array[j] < p) {
      utilities.swap(array, i, j);
      i += 1;
    }
  }
   utilities.swap(array, start, i - 1);
  return { array: array, pivot: i - 1 };
};

var quicksort = function (array, choosePivotStrategy, comparisons) {
  if (array.length === 0) {
    return {sorted: [], comparisons: comparisons};
  }

  comparisons += (array.length - 1);

  var pivotPosition = choosePivotStrategy(array);
  var part = partition(array, pivotPosition, array.length - 1);
  pivotPosition = part.pivot;

  var firstHalf = part.array.slice(0, pivotPosition);
  var secondHalf = part.array.slice(pivotPosition + 1);
  var firstHalfSorted = quicksort(firstHalf, choosePivotStrategy, 0);
  var secondHalfSorted = quicksort(secondHalf, choosePivotStrategy, 0);

  firstHalfSorted.sorted.push(array[pivotPosition]);
  var result = firstHalfSorted.sorted.concat(secondHalfSorted.sorted);
  return {sorted: result, comparisons: firstHalfSorted.comparisons + comparisons + secondHalfSorted.comparisons};
};

// strategies
var firstElementIsPivot = function () {
  return 0;
};

var lastElementIsPivot = function (array) {
  return array.length - 1;
};

var medianIsPivot = function (array) {
  return utilities.getMedianOfThree(array);
};

module.exports = {
  strategyFirstElementAsPivot: function (array) {
    return quicksort(array, firstElementIsPivot, 0);
  },
  strategyLastElementAsPivot: function (array) {
    return quicksort(array, lastElementIsPivot, 0);
  },
  strategyMedianElementAsPivot: function (array) {
    return quicksort(array, medianIsPivot, 0);
  },
};