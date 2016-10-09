var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var twoSum = require('./two-sum');

var range = [-10000, 10000];

fs.readFileAsync('input.txt', 'utf-8')
  .then(function (data) {
    var seenNumbers = {};
    var numbers = data
                  .split('\n')
                  .map(function (n) { return parseInt(n); });
    for (var n = 0; n < numbers.length; n++) {
      var num = numbers[n];
      var prefix = Math.abs(num).toString().substr(0, 5);
      if (!seenNumbers[prefix]) {
        seenNumbers[prefix] = [num];
      } else {
        seenNumbers[prefix].push(num);
      }
      
    }
    var withTwoSumCount = twoSum(seenNumbers, range[0], range[1]);
    return withTwoSumCount.length;
  }).then(function (count) {
    console.log(count);
  }).catch(function (err) {
    console.error(err);
  });