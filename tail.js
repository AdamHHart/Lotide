
const tail = function(array) {
  let tailArray = [];
  for(let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return(tailArray);
}

module.exports = tail;
// const cars = ["Honda", "Acura", "BMW", "Audi"];
// tail(cars);
// assertEqual(words.length, 3);

// const cars2 = ["Honda", "Acura", "BMW", "Audi", "Toyota"];
// tail(cars2);
// assertEqual(words.length, 3);