const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const findKeyByValue = function(searchObject, keyValue) {
//   const foundKey = [];
//   let objectKeys = (Object.keys(searchObject));

//   for(const element of objectKeys) {
//     if(keyValue === objectKeys[element]) {
//       foundKey.push(objectKeys[element]);
//     }
//   }
//   // console.log(foundKey);
//   return(foundKey);
// }

const findKeyByValue = function(searchObject, keyValue) {
  let foundKey = "";

  for(const element in searchObject) {
    console.log(element);
    if(keyValue === searchObject[element]) {
      foundKey = element;
    }
  }
  // console.log(foundKey);
  return(foundKey);
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);