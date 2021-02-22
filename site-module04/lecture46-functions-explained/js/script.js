// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v1.0";
console.log(multiply.toString()); // To get the source ode of the function
console.log(multiply.version);    // To get the version

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc; // return the address/reference of myFun (whereas myFunc() executes the function)
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

