$(document).ready(() => {
  $("#emailHelp").hide();
  $("#exampleInputPassword1").blur(() => {
    let val = $("#exampleInputPassword1").val();
    if (val.length >= 6 && val.length <= 30) {
      //   $("#passwordHelp").hide();
      $("#passwordHelp").fadeOut(2000);
    } else {
      //   $("#passwordHelp").show();
      $("#passwordHelp").fadeIn(2000);
    }
  });
  $("#exampleInputEmail1").blur(() => {
    let regex = new RegExp(
      "^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
    );
    let val = $("#exampleInputEmail1").val();
    if (regex.test(val)) {
      $("#emailHelp").fadeIn(2000);
    } else {
      $("#emailHelp").fadeOut(2000);
    }
  });
});
