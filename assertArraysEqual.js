
// const assertEqual = function(actual, expected) {
//   if(actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arr1, arr2) {
  if(JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return(true);
  } else {
    return(false);
  }
} 

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
}



assertArraysEqual([2, 6, 9], [2, 6, 9]);
assertArraysEqual([2, 6, 9], [2, 6, 8]);