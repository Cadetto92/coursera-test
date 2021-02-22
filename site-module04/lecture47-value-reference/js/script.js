// Copy by Reference vs by Value
console.log("*** Copy by Value (a and b are primitives) ***");
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
console.log("*** b is updated");
b = 5;
console.log("a: " + a);
console.log("b: " + b);

console.log("*** Copy by Reference (a and b are objects) ***");
var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);
console.log("*** b is updated");
b.x = 5;
console.log(a);
console.log(b);


// Pass by Reference vs by Value
function changePrimitive(primValue) {
  console.log("In changePrimitive()");
  console.log("Before: " + primValue);
  primValue = 5;
  console.log("After:  " + primValue);
}

function changeObject(objValue) {
  console.log("In changeObject()");
  console.log("Before: " + objValue.x);
  objValue.x = 5;
  console.log("After:  " + objValue.x);
}

console.log("*** Copy by value in a function (primitive) ***");
var value = 7;
changePrimitive(value); // primValue = value
console.log("After changePrimitive(), orig value:" + value);

console.log("*** Copy by reference in a function (object) ***");
value = { x: 7 };
changeObject(value); // objValue = value
console.log("After changeObject(), orig value: " + value.x);





