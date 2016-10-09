var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('underscore');

//TODO this is a very naive solution... 3 am mess. use min heap!
fs.readFileAsync('median.txt', 'utf-8')
  .then(function (data) {
    var numbers = data.split('\r\n').map(function (s) { return parseInt(s); });
    var medianSum = 0;
    for (var i = 1; i < numbers.length; i++) {
      var arr = numbers.slice(0, i);
      var sorted = _.sortBy(arr, function (n) { return n; });
      var pos;
      if (i % 2 === 0) {
        pos = sorted.length / 2 - 1;
      } else {
        pos = (sorted.length + 1) / 2 - 1;
      }
      var median = sorted[pos];
      medianSum += median;
    }
    console.log(medianSum % 10000);
  });