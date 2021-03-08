const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
let tailArray = tail(words); // no need to capture the return value since we are not checking it
console.log("tail array = ", tailArray);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 4); 
assertEqual(tailArray.length, 4); 
assertEqual(tailArray.length, 2); 