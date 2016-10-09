var should = require('should');
var sccs = require('./sccs');

// test files represents directed graphs.
// each line is the edge (u, v) where u->v

describe('strongly connected components', function () {

  it('returns [3,3,3] for sizes of SCSS', function (done) {
    var file = 'test1.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(3);
        results[1].should.equal(3);
        results[2].should.equal(3);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns [3,3,2] for sizes of SCSS', function (done) {
    var file = 'test2.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(3);
        results[1].should.equal(3);
        results[2].should.equal(2);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns [3,3,1,1] for sizes of SCSS', function (done) {
    var file = 'test3.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(3);
        results[1].should.equal(3);
        results[2].should.equal(1);
        results[3].should.equal(1);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns [7,1] for sizes of SCSS', function (done) {
    var file = 'test4.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(7);
        results[1].should.equal(1);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns [6,3,2,1] for sizes of SCSS', function (done) {
    var file = 'test5.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(6);
        results[1].should.equal(3);
        results[2].should.equal(2);
        results[3].should.equal(1);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns [6,3,2,1] for sizes of SCSS with nodes shuffled', function (done) {
    var file = 'test6.txt';
    sccs.fromFile(file)
      .then(function (results) {
        results[0].should.equal(6);
        results[1].should.equal(3);
        results[2].should.equal(2);
        results[3].should.equal(1);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

});