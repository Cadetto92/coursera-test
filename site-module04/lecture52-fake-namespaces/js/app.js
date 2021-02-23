yaakovGreeter.sayHello(); // From script1.js
johnGreeter.sayHi();      // From script2.js

// Example of Immediately Invoked Function Expression (IIFE) (pronounced iify)
(function (name) {
  console.log("Hello " + name);
})("Coursera!");
