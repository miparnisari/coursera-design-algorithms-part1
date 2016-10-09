var Promise = require('Bluebird');
var fs = Promise.promisifyAll(require('fs'));
var quicksort = require('./quicksort');

var processData = function(data) {
  var array = data.toString().split("\r\n");
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  var result = quicksort.strategyFirstElementAsPivot(newArray);
  console.log('comparisons with 1st elem as pivot: ' + result.comparisons);

  newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  result = quicksort.strategyLastElementAsPivot(newArray);
  console.log('comparisons with last elem as pivot: ' + result.comparisons);

  newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  result = quicksort.strategyMedianElementAsPivot(newArray);
  console.log('comparisons with median elem as pivot: ' + result.comparisons);
};

fs.readFileAsync('input.txt')
  .then(function (data) {
    processData(data);
    process.exit(0);
  }).catch(function (err) {
    console.error(err);
    process.exit(1);
  });