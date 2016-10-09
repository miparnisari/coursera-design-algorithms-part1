var counter = require('./inversions');
var should = require('should');

describe('count inversions', function () {

  it('counts inversions of array of size 4 and returns 0', function (done) {
    var count = counter([1, 2, 3, 4]).count;
    count.should.equal(0);
    done();
  })

  it('counts inversions of array of size 2 and returns 1', function (done) {
    var count = counter([2, 1]).count;
    count.should.equal(1);
    done();
  })

  it('counts inversions of array of size 4 and returns 1', function (done) {
    var count = counter([3, 2, 1, 4]).count;
    count.should.equal(3);
    done();
  })

  it('counts inversions of array of size 6 and returns 3', function (done) {
    var count = counter([1, 3, 5, 2, 4, 6]).count;
    count.should.equal(3);
    done();
  })

  it('counts inversions of array of size 7 and returns 1', function (done) {
    var count = counter([1, 3, 5, 2, 4, 6, 8]).count;
    count.should.equal(3);
    done();
  })

  it('counts inversions of array of size 10 and returns 22', function (done) {
    var count = counter([5, 2, 10, 8, 1, 9, 4, 3, 6, 7]).count;
    count.should.equal(22);
    done();
  })

  it('counts inversions of array of size 6 and returns 7', function (done) {
    var count = counter([3, 4, 6, 1, 2, 5]).count;
    count.should.equal(7);
    done();
  })

  it('counts inversions of array of size 6 and returns 7', function (done) {
    var count = counter([9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0]).count;
    count.should.equal(56);
    done();
  })

  it('counts inversions of array of size 6 and returns 7', function (done) {
    var count = counter([37, 7, 2, 14, 35, 47, 10, 24, 44, 17, 34, 11, 16, 48, 1, 39, 6,
      33, 43, 26, 40, 4, 28, 5, 38, 41, 42, 12, 13, 21, 29, 18, 3, 19,
      0, 32, 46, 27, 31, 25, 15, 36, 20, 8, 9, 49, 22, 23, 30, 45]).count;
    count.should.equal(590);
    done();
  })

  it('counts inversions of array of size 6 and returns 7', function (done) {
    var count = counter([4, 80, 70, 23, 9, 60, 68, 27, 66, 78, 12, 40, 52, 53, 44, 8, 49,
      28, 18, 46, 21, 39, 51, 7, 87, 99, 69, 62, 84, 6, 79, 67, 14,
      98, 83, 0, 96, 5, 82, 10, 26, 48, 3, 2, 15, 92, 11, 55, 63, 97,
      43, 45, 81, 42, 95, 20, 25, 74, 24, 72, 91, 35, 86, 19, 75, 58,
      71, 47, 76, 59, 64, 93, 17, 50, 56, 94, 90, 89, 32, 37, 34, 65,
      1, 73, 41, 36, 57, 77, 30, 22, 13, 29, 38, 16, 88, 61, 31, 85,
      33, 54]).count;
    count.should.equal(2372);
    done();
  })

  it('counts inversions of array of size 6 and returns 7', function (done) {
    var count = counter([18, 22, 4, 29, 15, 21, 13, 24, 20, 10, 11, 26, 27, 16, 12, 8,
      25, 14, 6, 17, 30, 9, 28, 5, 2, 1, 23, 7, 19, 3]).count;
    count.should.equal(266);
    done();
  })
})