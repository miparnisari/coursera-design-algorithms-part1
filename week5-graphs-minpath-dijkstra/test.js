var should = require('should');
var dijkstra = require('./dijkstra');

describe('shortest paths with dijkstra', function () {

  it('returns correct min paths for 8 nodes', function (done) {
    var file = 'test1.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(1);
        results[3].should.equal(2);
        results[4].should.equal(3);
        results[5].should.equal(4);
        results[6].should.equal(4);
        results[7].should.equal(3);
        results[8].should.equal(2);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns correct min paths for 9 nodes', function (done) {
    //this graph has node 9 with no outgoing edges
    var file = 'test2.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(6);
        results[3].should.equal(2);
        results[4].should.equal(4);
        results[5].should.equal(3);
        results[6].should.equal(10);
        results[7].should.equal(11);
        results[8].should.equal(9);
        results[9].should.equal(12);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns correct min paths for 10 nodes', function (done) {
    var file = 'test3.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(3);
        results[3].should.equal(2);
        results[4].should.equal(6);
        results[5].should.equal(9);
        results[6].should.equal(4);
        results[7].should.equal(4);
        results[8].should.equal(6);
        results[9].should.equal(8);
        results[10].should.equal(4);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns correct min paths for 6 nodes', function (done) {
    var file = 'test4.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(3);
        results[3].should.equal(2);
        results[4].should.equal(4);
        results[5].should.equal(5);
        results[6].should.equal(5);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns correct min paths for 5 nodes', function (done) {
    var file = 'test5.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(1);
        results[3].should.equal(3);
        results[4].should.equal(2);
        results[5].should.equal(1000000);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('returns correct min paths for 6 nodes', function (done) {
    var file = 'test6.txt';
    var source = 1;
    dijkstra.fromFile(file, source)
      .then(function (results) {
        results[1].should.equal(0);
        results[2].should.equal(1);
        results[3].should.equal(2);
        results[4].should.equal(3);
        results[5].should.equal(5);
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });       

});