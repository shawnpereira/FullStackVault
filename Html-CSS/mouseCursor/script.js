$(document).ready(function () {
  // Cursor movement
  $("body").mousemove(function (event) {
    $("#cursor").css({
      left: event.clientX + "px",
      top: event.clientY + "px",
    });
    $("#cursor2").css({
      left: event.clientX + "px",
      top: event.clientY + "px",
    });
  });

  // Cursor hover effect
  $("#cursor2").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // Fade-in effect on list items hover
  $(".section li").hover(
    function () {
      $(this).addClass("fade-in active");
    },
    function () {
      $(this).removeClass("fade-in active");
    }
  );
});
