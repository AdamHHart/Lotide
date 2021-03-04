const ourMap = function(array, callbackFunction) {
  // return(ourMap);
  const results = [];
  for (let item of array) {
    results.push(callbackFunction(item));
  }
  return results;
}

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



const words = ["ground", "control", "to", "major", "tom"];

const results1 = ourMap(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

console.log();
console.log();

const double = function(num) {
  return num * 2;
}
const numbers = [5, 8, 100, 200];

console.log(ourMap(numbers, double));
assertArraysEqual((ourMap(numbers, double)), [ 10, 16, 200, 400 ]);
assertArraysEqual((ourMap(words, double)), [ 10, 16, 200, 400 ]);


const fullNames = [
  {firstName: "Adam", lastName: "Hart"},
  {firstName: "Dom", lastName: "Hart"}
];


const arrayLastNames = (ourMap(fullNames, element => element.lastName));
console.log(arrayLastNames);
assertArraysEqual(arrayLastNames, [ 'Hart', 'Hart' ]);

