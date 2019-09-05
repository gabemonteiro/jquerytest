$(document).ready(function() {
  $(".clickable").click(function() {
    $("#pug-showing").slideToggle();
    $("#text-showing").fadeToggle();
    $("#pug-hiding").slideToggle();
  });
});
