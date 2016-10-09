var mincut = require('./mincut');

var min = mincut.findMinimumFromFile('input.txt', 100000);
console.log(min);