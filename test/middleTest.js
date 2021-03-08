const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

const numArr = [1, 7, 12, 3, 1000];

describe("#middle", () => {

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [12] for numArr", () => {
    assert.deepEqual(middle(numArr), [12]);
  });

});

// middle([])
// middle([1]) // => []
// middle([1, 2]) // => []
// // For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// const numArr = [1, 7, 12, 3, 1000];
// middle(numArr);
// assertArraysEqual(numArr, ([1, 7, 12, 3, 1000]));
// assertArraysEqual((middle(numArr)), [12]);