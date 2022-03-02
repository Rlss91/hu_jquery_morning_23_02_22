const petsArr = ["dog", "cat", "fish", "horse", "parrot", "mouse", "dodo"];

$(document).ready(() => {
  //   document.getElementById("txt").addEventListener("input", ()=>{ })
  /*
    input event will happends every time when user modefy the input
  */
  $("#txt").on("input", () => {
    console.log("event");
    //get value from txt input
    let val = $("#txt").val();
    //filter
    let newPetsArr = petsArr.filter((item) => {
      return item.startsWith(val);
    });
    let listOfAnimals = $("#list-of-animals");
    //clear the list from last search
    listOfAnimals.empty();
    //add new items to list
    for (let item of newPetsArr) {
      listOfAnimals.append(`<li class="list-group-item">${item}</li>`);
    }
  });
});
