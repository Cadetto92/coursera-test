// Closures
function makeMultiplier(multiplier) {
  function b() {
     console.log("Multiplier is: " + multiplier);
  }
  b(); // What's the point of declaring b() here!? Much simpler to do: 
  console.log("Multiplier is simply: " + multiplier);

  return (
      function (x) {
        return multiplier * x;
      }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env
var doubleAll = makeMultiplier(3);
console.log(doubleAll(10)); // its own exec env

// My notes:
console.log(doubleAll.multiplier); // This will not work of course! multiplier was not stored as a property! It was just there as the argument of makeMultiplier! 

