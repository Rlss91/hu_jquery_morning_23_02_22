$(document).ready(() => {
  $("#txt").blur(() => {
    let inputValue = $("#txt").val();
    if (inputValue == "") {
      document.getElementById("txt").style.backgroundColor = "red";
    } else {
      document.getElementById("txt").style.backgroundColor = "green";
    }
  });
});
