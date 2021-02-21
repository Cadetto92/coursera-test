// ***** String concatenation and += operator
console.log("*** String Concactenation ***");
var string = "Hello";
string += " World";
//string = string + " World";
console.log(string + "!");

// ***** Regular math operators: +, -, *, /
console.log("*** Operators ***");
console.log((5 + 4) / 3);
console.log(undefined / 5); //NaN = Not a Number
function test1(a) {
  console.log( a / 5);
}
test1(); //NaN = Not a Number
console.log("NaN = Not a Number");

// ***** Equality
console.log("*** Equality ***");
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}
x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
  console.log("Number 4 equal to string '4' with '=='");
}

// ***** Strict Equality
console.log("*** Strict Equality ***");
if (x === y) {
  console.log("This line won't ever execute");
}
else {
  console.log("Strict: x='4' is NOT equal to y=4");
  console.log("Number 4 is NOT equal to string '4' with '==='");
}

// ***** If statement (all false)
console.log("*** if Statement (All False) ***");
if ( false || null || undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}

// ***** Best practice for {} style
console.log("*** Best Practice for { and ; ***");
// Curly brace on the next line is recommended because of auto ; at the end of each line
function a() 
{
  return     //!!! A semi-column is automatically added here and hence a() returns "undefined")
  { 
    name: "Yaakov"
  };
}
function b() {
  return { 
    name: "Yaakov"
  };
}
console.log(a());
console.log(b());

//***** For loop
console.log("*** Loop: for ***");
var sum = 0;
for(var i = 0; i <= 3; i++) {
  sum = sum + i;
}
console.log("Sum of 0 through 3 is: " + sum);
