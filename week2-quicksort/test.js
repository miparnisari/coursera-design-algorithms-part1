var qs = require('./quicksort');
var should = require('should');

describe('quicksort', function () {

  it('sorts array of 3 using 1st element as pivot', function (done) {
    var result = qs.strategyFirstElementAsPivot([3, 2, 1]);
    result.sorted.should.eql([1, 2, 3]);
    done();
  });

  it('sorts array of 3 using LAST element as pivot', function (done) {
    var result = qs.strategyLastElementAsPivot([3, 2, 1]);
    result.sorted.should.eql([1, 2, 3]);
    done();
  });

  it('sorts array of 3 using MEDIAN element as pivot', function (done) {
    var result = qs.strategyMedianElementAsPivot([3, 2, 1]);
    result.sorted.should.eql([1, 2, 3]);
    done();
  });

  it('sorts array of 8 using 1st element as pivot', function (done) {
    var result = qs.strategyFirstElementAsPivot([3, 8, 2, 5, 1, 4, 7, 6]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    done();
  });

  it('sorts array of 8 using LAST element as pivot', function (done) {
    var result = qs.strategyLastElementAsPivot([3, 8, 2, 5, 1, 4, 7, 6]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    done();
  });

  it('sorts array of 8 using MEDIAN element as pivot', function (done) {
    var result = qs.strategyMedianElementAsPivot([3, 8, 2, 5, 1, 4, 7, 6]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    done();
  });

  it('number of comparisons is 25 for array of size 10 sorted with 1st element as pivot', function (done) {
    var result = qs.strategyFirstElementAsPivot([3, 9, 8, 4, 6, 10, 2, 5, 7, 1]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    result.comparisons.should.eql(25);
    done();
  });

  it('number of comparisons is 29 for array of size 10 sorted with last element as pivot', function (done) {
    var result = qs.strategyLastElementAsPivot([3, 9, 8, 4, 6, 10, 2, 5, 7, 1]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    result.comparisons.should.eql(29);
    done();
  });

  it('number of comparisons is 21 for array of size 10 sorted with median element as pivot', function (done) {
    var result = qs.strategyMedianElementAsPivot([3, 9, 8, 4, 6, 10, 2, 5, 7, 1]);
    result.sorted.should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    result.comparisons.should.eql(21);
    done();
  });

});