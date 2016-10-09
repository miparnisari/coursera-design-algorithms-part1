var HashTable = require('hashtable');
var should = require('should');
var twoSum = require('./two-sum');

describe('two sum problem', function () {
  it("should work with no duplicates", function () {
    var input = [-3, -1, 1, 3];
    var hashtable = new HashTable();
    hashtable.put(1, true);
    hashtable.put(-1, true);
    hashtable.put(3, true);
    hashtable.put(-3, true);

    twoSum(4, input, hashtable).should.equal(true);
    twoSum(1, input, hashtable).should.equal(false);
    twoSum(0, input, hashtable).should.equal(true);
  });

  it("should work with duplicates", function () {
    var input = [-3, -1, 1, 3, 3, 3];
    var hashtable = new HashTable();
    hashtable.put(1, true);
    hashtable.put(-1, true);
    hashtable.put(3, true);
    hashtable.put(-3, true);

    twoSum(4, input, hashtable).should.equal(true);
    twoSum(1, input, hashtable).should.equal(false);
    twoSum(0, input, hashtable).should.equal(true);
  });

});