const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
      if(!results[sentence[i]]) {
        results[sentence[i]] = [i]; //push index here
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  // for loop looping through sentence
  // add letters as keys
  // push sentence[i] to corresponding letter
  console.log("These letters are now in result", results);
  return results;
};



(letterPositions("lighthouse in the house"));

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

assertArraysEqual(letterPositions("hello").e, [1]);