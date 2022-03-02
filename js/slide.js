$(document).ready(() => {
  $("#slide-up").click(() => {
    $("#div").slideUp();
  });
  $("#slide-down").click(() => {
    $("#div").slideDown();
  });
  $("#slide-toggle").click(() => {
    $("#div").slideToggle();
  });
  console.log($("button")[0]);
});
