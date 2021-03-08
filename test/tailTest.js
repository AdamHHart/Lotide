const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns " + ["Lighthouse", "Labs"] + " for words", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });


});

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(words.length, 4); 
