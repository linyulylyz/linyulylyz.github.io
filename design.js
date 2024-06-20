$(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".fixed-box").addClass("animate__animated animate__backInRight");
      } else {
        $(".fixed-box").removeClass("animate__animated animate__backInRight");
      }
    });
  });