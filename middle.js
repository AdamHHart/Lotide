

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


