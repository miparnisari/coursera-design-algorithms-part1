var util = require('./util');
var should = require('should');
var Heap = require('./heap');

describe('utilities', function () {
  it('median pivot should be 4', function (done) {
    var median = util.getMedianOfThree([8, 2, 4, 5, 7, 1]);
    median.should.eql(2);
    done();
  });

  it('median pivot should be 5', function (done) {
    var median = util.getMedianOfThree([4, 5, 6, 7]);
    median.should.eql(1);
    done();
  });

  it('should order heap with custom order function', function (done) {
    var distances = { 10: 1, 3: 2, 4: 3, 8: 4, 2: 5, 9: 6, 7: 7, 1: 8, 6: 10, 5: 11 };
    var heap = new Heap(function (x) { return distances[x]; });
    var elems = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
    elems.map(function (e) {
      heap.push(e);
    });

    var res = [];
    while (heap.size() > 0) {
      res.push(heap.pop());
    }
    res.should.eql([10, 3, 4, 8, 2, 2, 9, 7, 1, 6, 5]);

    done();
  });

  it('should order heap', function (done) {
    var heap = new Heap(function (x) { return x; });
    var elems = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
    elems.map(function (e) {
      heap.push(e);
    });

    var res = [];
    while (heap.size() > 0) {
      res.push(heap.pop());
    }
    res.should.eql([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    done();
  });
});