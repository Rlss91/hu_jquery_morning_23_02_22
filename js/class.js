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
  $("#btn1").click(() => {
    $("#btn1").toggleClass("btn-primary");
    $("#btn1").toggleClass("btn-success");
  });
});
