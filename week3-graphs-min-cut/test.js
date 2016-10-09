var mincut = require('./mincut');
var should = require('should');

describe('mincut', function () {

  this.timeout(100000);

  it('finds 2 mincut for graph with 8 nodes', function (done) {
    var min = mincut.findMinimumFromFile('test1.txt', 1000);
    min.should.equal(2);
    done();
  });

  it('finds 2 mincut for graph with 8 nodes', function (done) {
    var min = mincut.findMinimumFromFile('test2.txt', 1000);
    min.should.equal(2);
    done();
  });

  it('finds 1 mincut for graph with 8 nodes', function (done) {
    var min = mincut.findMinimumFromFile('test3.txt', 1000);
    min.should.equal(1);
    done();
  });

  it('finds 1 mincut for graph with 8 nodes', function (done) {
    var min = mincut.findMinimumFromFile('test4.txt', 100);
    min.should.equal(1);
    done();
  });

  it('finds 3 mincut for graph with 40 nodes', function (done) {
    var min = mincut.findMinimumFromFile('test5.txt', 10000);
    min.should.equal(3);
    done();
  });
});