$(document).ready(() => {
  //get value of input
  let inputValue = $("#txt").val();
  //set value of input
  $("#txt").val("some text");
  //get content as html of div/tag/elm
  let contentData = $("#loremBox").html(); //document.getElementById("loremBox").innerHTML
  console.log("contentData", contentData);
  //set html to div/tag/elm
  $("#loremBox").html("<h1>this is new div now</h1>");
  //get content as text of the div/tag/elm
  let contentDataText = $("#loremBoxText").text();
  console.log("contentDataText", contentDataText);
  //set text to div/tag/elm
  $("#loremBoxText").text("<h1>this is new div now</h1>");
  //get the value of the attr of elm
  let attrValue = $("#img").attr("alt");
  console.log("attrValue", attrValue);
  //set the value to the attr of elm
  $("#img").attr("alt", "new value from jQuery");
});
