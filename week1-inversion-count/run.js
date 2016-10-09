var Promise = require('Bluebird');
var fs = Promise.promisifyAll(require('fs'));
var counter = require('./inversions');

fs.readFileAsync('input.txt')
  .then(function (data) {
    var array = data.toString().split("\r\n");
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(parseInt(array[i]));
    }
    var count = counter(newArray);
    console.log('inversions: ' + count.count);
  }).catch(function (err) {
    console.error(err);
  });