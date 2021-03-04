const { isArray } = require("lodash");

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return(true);
  } else {
    return(false);
  }
} 

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if(eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1); //obj1Keys = ["c", "d"]   object1 = { c: "1", d: ["2", 3] }
  const obj2Keys = Object.keys(object2); //obj2Keys = ["d", "c"]   object2 = { d: ["2", 3], c: "1" }
  console.log(obj1Keys, obj2Keys);
  
  if(obj1Keys.length === obj2Keys.length) {
    for(const key of obj1Keys) {
      console.log("OBJECT KEY =", object1[key]);  // ["2", 3]
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        } else {
          return false;
        }
      }
      console.log("key #", key);
      if(object1[key] !== object2[key]) { // case if no arrays in object
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);