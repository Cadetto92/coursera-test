// Event handling
document.addEventListener("DOMContentLoaded", function (event) {

  // Unobtrusive event binding
  document.querySelector("button").addEventListener("click", function () {
      
    // Call server to get the name
    $ajaxUtils.sendGetRequest("./data/name.txt", function (request) {

      console.log("*** sendGetRequest");
      var name = request.responseText;
      console.log("* name: " + name);
      document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>";
    });
    // !!! Need to use browsersync to access data/name.txt => browser-sync start --server --directory --files "**/*" 
    // !!! Else you get the error, Access to XMLHttpRequest at 'data/name.txt' from origin 'null' has been blocked by CORS policy

  });

});

