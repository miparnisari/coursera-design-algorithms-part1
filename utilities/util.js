var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

var formatArray = function (array, nameOfarray) {
  if (array.length === 0) {
    return nameOfarray + ": []";
  }
  var result = nameOfarray + ": [";
  for (var i = 0; i < array.length; i++) {
    result += array[i] + ', ';
  }
  result = result.substr(0, result.length - 2);
  result += "]";
  return result;
};

var getMedianOfThree = function (array) {
  var first = array[0];
  var middlePosition = Math.floor((array.length - 1) / 2.0);
  var middle = array[middlePosition];
  var lastPosition = array.length - 1;
  var last = array[lastPosition];

  if ((first <= middle && middle <= last) || (last <= middle && middle <= first))
    return middlePosition;
  if ((middle <= first && first <= last) || (last <= first && first <= middle))
    return 0;
  
  return lastPosition;
};

module.exports = {
  formatArray: formatArray,
  getMedianOfThree: getMedianOfThree,
  swap: swap
};