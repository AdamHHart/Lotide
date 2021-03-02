const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for(let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return(tailArray);
}

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
let tailArray = tail(words); // no need to capture the return value since we are not checking it
console.log("tail array = ", tailArray);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 4); 
assertEqual(tailArray.length, 4); 
assertEqual(tailArray.length, 2); 


// const cars = ["Honda", "Acura", "BMW", "Audi"];
// tail(cars);
// assertEqual(words.length, 3);

// const cars2 = ["Honda", "Acura", "BMW", "Audi", "Toyota"];
// tail(cars2);
// assertEqual(words.length, 3);