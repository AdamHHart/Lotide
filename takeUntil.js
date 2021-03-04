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

const takeUntil = function(array, callback) {
  // ...
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      // console.log(array[i], "callback is: ", true);
      return(newArr);
    } else {
      // console.log(array[i], "Callback is : ", false);
      newArr.push(array[i]);
    }
  }
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); //should return TRUE
assertArraysEqual(results1, [ 1, 2, 5, 7, 5000 ]); //should return FALSE


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); //should return TRUE

