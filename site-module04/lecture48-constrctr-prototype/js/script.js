// Function constructors
function Circle(radius) {  // Best Practice: functions with first letter uppercase are function constructors
  this.radius = radius;    // this will be the last element called. Here the fucntion Circle.
}                          // !!! Function constructor should not have any "return" !!!

// Use of Prototype (__proto__)
Circle.prototype.getArea = 
  function () {
  return Math.PI * Math.pow(this.radius, 2);
};

//Main
var myCircle = new Circle(10);      // First Circle: Use the function constructor Circle() with the "new" keyword
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20); // Second Circle: Use the function constructor Circle() with the "new" keyword
console.log(myOtherCircle);

console.log(this);

