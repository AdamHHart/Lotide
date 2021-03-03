
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

// const without = function(source, itemsToRemove) {
//   let itemsRemaining = [];

//   for (let i = 0; i < source.length; i++) {
//     console.log("i loop =", i);

// if(source[i].includes(itemsToRemove)) {
//         console.log("Nothing to add");

//       } else {
//         itemsRemaining.push(source[i]);
//         console.log(`items remaining = ${itemsRemaining}, `);
//       }
//     } 
//     console.log(itemsRemaining);
//     return(itemsRemaining);
//   } 


// const without = function(source, itemsToRemove) {
//   let itemsRemaining = [];

//   for (let i = 0; i < source.length; i++) {
//     console.log("i loop =", i);
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       console.log("j loop =", j);

//       if(source[i] === itemsToRemove[j]) {
//         console.log("Nothing to add");

//       } else {
//         itemsRemaining.push(source[i]);
//         console.log(`items remaining = ${itemsRemaining}, `);
//       }
//     } 
//   } 
//   console.log(itemsRemaining);
//   return(itemsRemaining);
// }

const without = function(source, itemsToRemove) {
  let itemsRemaining = [];

  for (let i = 0; i < source.length; i++) {
      if(itemsToRemove.includes(source[i])) {
        console.log("")
      } else {
        itemsRemaining.push(source[i]);
    } 
  } 
  console.log(itemsRemaining);
  return(itemsRemaining);
}

without([1, 2, 3], [1]) // => [2, 3]
console.log("");
console.log("");
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
console.log("");
console.log("");


without(["dog", "cat", "BEAR"], ["cat", "DOG"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
console.log("");
console.log("");
assertArraysEqual(words, ["hello", "world", "lighthouse"]);