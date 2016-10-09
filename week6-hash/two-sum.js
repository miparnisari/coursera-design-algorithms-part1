var _ = require('underscore');

function distinctTwoSum(seenNumbers, from, to) {
  var withTwoSumCount = {};
  for (var prefix in seenNumbers) {
    var list = seenNumbers[prefix];
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list.length; j++) {

        var diffOne = list[i] + list[j];
        if ((diffOne >= from && diffOne <= to) && !withTwoSumCount[diffOne]) {
          withTwoSumCount[diffOne] = true;
        }
        var diffTwo = list[j] + list[i];
        if ((diffTwo >= from && diffTwo <= to) && !withTwoSumCount[diffTwo]) {
          withTwoSumCount[diffTwo] = true;
        }
      }
    }
  }

  return Object.keys(withTwoSumCount);
}

module.exports = distinctTwoSum;