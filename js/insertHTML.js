$(document).ready(() => {
  //add new tag/elm to exisiting tag/elm
  //will add the new tag at the end.
  $("#loremBox").append("<a href='https://www.google.com'>google</a>");
  //will add the new tag at the beginning
  $("#loremBox").prepend("<strong>Beginning</strong>");
});
