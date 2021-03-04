const { Str } = require("prelude-ls");

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const exist = {};

  for(const letter of sentence) {
    if(exist[letter]) {
      exist[letter] += 1;
    } else {
      exist[letter] = 1;
    }
  }
  console.log("these letters exist =", exist);
  return(exist);
}

const test = countLetters("ssssaatttttte");

assertEqual(test["s"], 4);
assertEqual(test["a"], 2);
assertEqual(test["t"], 6);
