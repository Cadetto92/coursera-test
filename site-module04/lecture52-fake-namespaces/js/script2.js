(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi "; // This work because of IIFE
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);



