$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  //This prevents the form from submitting jusy for DEMO only!
  // $("form").submit(function (event) {
  //   event.preventDefault();
  //   return false;
  // });

  // hide collapse nav on click
  // $(".navbar-nav > li > a").on("click", function () {
  //   $(".navbar-collapse").collapse("hide");
  // });
});
