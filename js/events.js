$(document).ready(() => {
  console.log("this event will happends when the website is fully loaded");

  $("#btn").click(() => {
    console.log("this event will happends when you click on the btn");
  });

  $("#btn").dblclick(() => {
    console.log("this event will happends when you double click on the btn");
  });

  $("#btn").mouseenter(() => {
    console.log("this event will happends when you hover on the btn");
  });

  $("#btn").mouseleave(() => {
    console.log(
      "this event will happends when you move away from the btn with your mouse"
    );
  });

  $("#txt").focus(() => {
    console.log("this event will happends when you click on input");
  });

  $("#txt").blur(() => {
    console.log("this event will happends when you click away from the input");
  });
});
