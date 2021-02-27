(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};

// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
  var request = getRequestObject(); // local request to avoid race condition as we are asynchronous
  request.onreadystatechange = function() { 
    handleResponse(request, responseHandler); // Fonction that will be called on reception of response
  };
  request.open("GET", requestUrl, true); // true = asynchronous/don't wait vs false = synchronous/wait
  request.send(null); // To send GET request. Argument is required for POST only. Can use NULL for GET.
};

// Only calls user provided 'responseHandler' function if response is ready and not an error
function handleResponse(request, responseHandler) {
  if ((request.readyState == 4) && (request.status == 200)) { // 4: request finished and response is ready // 200: OK
    responseHandler(request);
  }
}

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window); // Using IIFE

