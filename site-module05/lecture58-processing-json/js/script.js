// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
        var message = ""
        if (res.firstName && res.lastName) {
          message = res.firstName + " " + res.lastName;
        }
        else {
          message = "Mr. Unknown";
        }
        if (res.likesChineseFood) {
          message += " likes Chinese food";
        }
        else {
          message += " doesn't like Chinese food";
        }
        message += " and uses ";
        if (res.numberOfDisplays) {
          message += res.numberOfDisplays + 1;
          message += " displays for coding.";
        }
        else {
          message += "no display for coding.";
        }

        document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
        });
    });
}); 





