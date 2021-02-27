$(function () { // Same as document.addEventListener("DOMContentLoaded"... but using JQuery function

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",... but using JQuery function 
  $("#navbarToggle").blur(function (event) { // blur => lose focus bcz you click somewhere else 
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide'); // collapse is part of bootstrap but it is a plugin from JQuery
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
