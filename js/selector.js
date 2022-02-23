//id only
// document.getElementById("id");

//get element like css do
// document.querySelector("id, name, tagname, class");

//get element like css do
// $("id, name, tagname, class");

//js
// window.addEventListener("load", () => {
//   document.getElementById("btn").addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
//   });
// });

//jQuery
$(document).ready(() => {
  $("#btn").click(() => {
    document.body.style.backgroundColor = "red";
  });
});
