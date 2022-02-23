/*
    create arr of images (url)
    create img to display one image
    create btn to display the next image from the arr
    create btn to display the prev image from the arr
*/
let imgsArr = [
  "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  "https://www.w3schools.com/howto/img_forest.jpg",
];
let imgsArrIndex = 0;

$(document).ready(() => {
  $("#img").attr("src", imgsArr[imgsArrIndex]);
  $("#nextBtn").click(() => {
    imgsArrIndex++;
    if (imgsArrIndex >= imgsArr.length) {
      imgsArrIndex = 0;
    }
    $("#img").attr("src", imgsArr[imgsArrIndex]);
  });
  $("#prevBtn").click(() => {
    imgsArrIndex--;
    if (imgsArrIndex < 0) {
      imgsArrIndex = imgsArr.length - 1;
    }
    $("#img").attr("src", imgsArr[imgsArrIndex]);
  });
});
