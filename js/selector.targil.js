/*
    create 2 btns
    1) will change the background color to red
    2) will change the background color to white
*/

$(document).ready(() => {
  $("#changeToRed").click(() => {
    document.body.style.backgroundColor = "red";
  });
  $("#changeToWhite").click(() => {
    document.body.style.backgroundColor = "white";
  });
});
