// Event handling

document.addEventListener("DOMContentLoaded", function (event) {
    // sayHello() similar to lecture 53
    function sayHello(event) {
      console.log("this in sayHello(): " + this);
      this.textContent = "Said it loud!!!"; // To change the content of the button
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";
      document.getElementById("content").innerHTML = message;
      if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    };

    console.log("sayHello: " + sayHello);
    console.log("button: " + document.querySelector("button"));

    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello); // Trigger sayHello on click

  }
);

// document.querySelector("button").onclick = sayHello; // In index.html, do not forget to use <script> at the end of the page
// Else document.querySelector("button") will be equal to NULL.