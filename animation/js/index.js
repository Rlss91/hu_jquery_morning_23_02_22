$(document).ready(() => {
  //   $("#btn").click(() => {
  //     $("#div").animate(
  //       {
  //         width: "300px",
  //         height: "300px",
  //       },
  //       2000,
  //       () => {
  //         console.log("animation done");
  //         $("#div").animate({
  //           width: "100px",
  //           height: "100px",
  //         });
  //       }
  //     );
  //   });
  //   $("#btn").click(() => {
  //     $("#div")
  //       .animate({ width: "300px" }, 1000)
  //       .animate({ width: "600px" }, 3000)
  //       .animate({ width: "300px" }, 2000)
  //       .animate({ width: "100px" }, 4000, () => {
  //         console.log("this animation is done");
  //       });
  //   });
  $("#btn").click(() => {
    $("#div")
      .animate({ left: "300px" }, 1000)
      .animate({ top: "600px" }, 3000)
      .animate({ left: "0px" }, 2000)
      .animate({ top: "0px" }, 4000, () => {
        console.log("this animation is done");
      });
  });
  $("#div").click(() => {
    //stop the currect animation
    // $("#div").stop();
    //stop all animation
    $("#div").stop(true);
  });
});
