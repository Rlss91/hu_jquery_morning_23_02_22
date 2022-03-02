const petsArr = ["dog", "cat", "oger", "kengeru", "kuwala"];
$(document).ready(() => {
  let listOfAnimals = $("#list-of-animals");
  for (let item of petsArr) {
    listOfAnimals.append(`<li class="list-group-item">${item}</li>`);
  }
  /*
    for(let i=0;i<petsArr.length;i++){
        petsArr[i]
    }
  */
});
