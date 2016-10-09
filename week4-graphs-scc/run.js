var sccs = require('./sccs');

console.log('please run with --max_old_space_size=8192!');

var positions = [0,1,2,3,4,5];
var file = 'input.txt';
sccs.fromFile(file)
  .then(function (results) {
    positions.map(function (p) {
      console.log(p + '-th biggest SCC size: ' + results[p]);
    });
  });