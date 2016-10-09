var mergeAndCountSplitInversions = function (arrayOne, arrayTwo) {
  var count = 0;
  var array = [];
  var i = 0, j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] <= arrayTwo[j]) {
      array.push(arrayOne[i]);
      i++;
    } else {
      count += arrayOne.length - i;
      array.push(arrayTwo[j]);
      j++;
    }
  }
  while (i < arrayOne.length) {
    array.push(arrayOne[i]);
    i++;
  }
  while (j < arrayTwo.length) {
    array.push(arrayTwo[j]);
    j++;
  }

  return { array: array, count: count };
};


var mergeAndCountInversions = function (array) {
  if (array.length === 1) {
    return { array: array, count: 0 };
  }
  if (array.length === 2) {
    if (array[0] <= array[1]) {
      return { array: array, count: 0 };
    }

    return { array: [array[1], array[0]], count: 1 };
  }
  var left = mergeAndCountInversions(array.slice(0, array.length / 2));
  var right = mergeAndCountInversions(array.slice(array.length / 2, array.length));
  var split = mergeAndCountSplitInversions(left.array, right.array);
  return { array: split.array, count: left.count + right.count + split.count };
};

module.exports = mergeAndCountInversions;