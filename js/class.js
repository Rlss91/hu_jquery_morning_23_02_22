$(document).ready(() => {
  $("#add-class").click(() => {
    $("#div").addClass("green-screen");
  });
  $("#remove-class").click(() => {
    $("#div").removeClass("green-screen");
  });
  $("#toggle-class").click(() => {
    $("#div").toggleClass("green-screen");
  });
});
