var dijkstra = require('./dijkstra');

var file = 'input.txt';
var source = 1;
dijkstra.fromFile(file, source)
  .then(function (results) {
    var nodes = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];
    var res = '';
    nodes.map(function (n) {
      res += results[n] + ',';
    });
    res = res.substr(0, res.length - 1);
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });
