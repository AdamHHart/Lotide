

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = function(object, callback) {
  let returnKey = "";
  for(const key in object) {
    if(callback(object[key])) {
      returnKey = key;
      console.log(key);
      return returnKey;
    }
  }
}

// const findKey = function(object, callback) {
//   let returnKey = "";
//   for(let i = 0; i < object.length; i++) {
//     if(callback(object[i].findKey)) {
//       console.log(object[i], "callback is: ", true);
//       return(returnKey);
//     } else {
//       console.log(object[i], "Callback is : ", false);
//       returnKey = object[i];
//     }
//   }
// }

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

