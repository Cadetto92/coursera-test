/* Lecture 41: Part 1: 2 or 5 will be logged? */
var x = 2;
A();

function A () {
	var x = 5;
	B();
}

function B () {
    console.log(x);
}

/* Lecture 41: Part 2: Declare b() inside a() or Global */
// Equivalent declaration of the function a()
// var a = function ()
// function a ()
var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);
  //function b ()
  function b () {
     console.log("b: message = " + message); 
  }
  b();
}
//function b ()
/*function b () {
    console.log("b: message = " + message); 
}*/

//Global/Main
var message = "in global";
console.log("global: message = " + message);
a();
