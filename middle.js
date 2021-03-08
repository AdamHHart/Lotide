const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(inputArray) {
  let divideArray = (inputArray.length / 2);
  // console.log("divideArray = ", Math.floor(divideArray));
  let output = [];

  if(inputArray.length === 0 || inputArray.length === 1 || inputArray.length === 2 ){
    output = [];
    console.log(inputArray, "output for arrays with 1 or 2 elements:", output);
    return(output);

  } else if(inputArray.length % 2 === 0) {
    // return 2 numbers
    output = inputArray.slice((divideArray - 1), divideArray + 1);
    console.log(inputArray, "output for arrays with EVEN inputs", output);
    return(output);

  } else if(inputArray.length % 2 !== 0) {
    // return 1 number
    output = inputArray.slice((divideArray), divideArray + 1);
    console.log(inputArray, "output for arrays with ODD outputs", output);
    return(output);

  }
}

module.exports = middle;

middle([])
middle([1]) // => []
middle([1, 2]) // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const numArr = [1, 7, 12, 3, 1000];
middle(numArr);
assertArraysEqual(numArr, ([1, 7, 12, 3, 1000]));
assertArraysEqual((middle(numArr)), [12]);
