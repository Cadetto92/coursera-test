// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
    
  function sayHello (event) {
    console.log(event); // Logging the event
    this.textContent = "Said it!";
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;
    if (name === "student") {
      var title = document.querySelector("#title").textContent;
      title += " & Lovin' it!";
      document.querySelector("h1").textContent = title;
    }
  }
  // Unobtrusive event binding
  document.querySelector("button").addEventListener("click", sayHello);

  // Second event listener
  document.querySelector("body").addEventListener("mousemove", function (event) {
    if (event.shiftKey === true) {
      console.log("x: " + event.clientX);
      console.log("y: " + event.clientY);
    }
  });

  // Third event listener
  var i = 0;
  document.querySelector("body").addEventListener("keydown", function (event) {
    i++;
    if (event.ctrlKey === true) {
      console.log("Ctrl is down " + i + " times!");
    }
  });

});
