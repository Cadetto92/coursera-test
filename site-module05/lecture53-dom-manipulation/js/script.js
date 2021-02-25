// DOM manipulation

console.log("*** the document object ***");
console.log(document.getElementById("title"));
console.log(document.getElementById("content"));
console.log(document instanceof HTMLDocument);

console.log("*** sayHello() ***");
function sayHello () {
  var name = document.getElementById("name").value; // To get the input
  var message = "<h2>Hello " + name + "!</h2>"; 
  // To print message in console
  console.log(message); // Just to test
  // To get <div id=content> and set its content to message  
  document.getElementById("content").textContent = message; // Just to test - overwritten by next line
  // To get <div id=content> and set its content to message and interpreted as html and not simple text
  document.getElementById("content").innerHTML = message;

  if (name === "student") {
      var title;
      // To get <h1 id="title"> using getElementById()
      title = document.getElementById("title").textContent; // Just to test - overwritten by next line
      // To get <h1 id="title"> using querySelector() (i.e. using selector/css style)
      title = document.querySelector("#title").textContent;
      title += " & Lovin' it!";
      document.querySelector("#title").textContent = title; // To display the new modified title - using #tittle - overwritten
      document.querySelector("h1").textContent = title;    // To display the new modified title - using h1
  }
}