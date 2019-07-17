console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogImage() {
  fetch(imgUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      renderImage(json.message)
    });
}

let dogAll = null;
function fetchDogBreed(char) {
  fetch(breedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      dogAll = Object.keys(json.message);
      renderBreed(dogAll);
    });
}

function renderImage(json) {
  const container = document.querySelector('#dog-image-container');
  json.forEach(imageUrl => {
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    container.appendChild(img);
  })
}

function createBreedList (dogBreed) {
  const breedContainer = document.querySelector('#dog-breeds');
  const list = document.createElement('li');
  list.innerText = dogBreed;
  breedContainer.appendChild(list);
  list.addEventListener('click', function (e) {
    e.target.style.color = "firebrick";
  })
}

function renderBreed(json) {
  // console.log(json);
  // const breedContainer = document.querySelector('#dog-breeds');
  json.forEach(dogBreed => {
    // const list = document.createElement('li');
    // list.innerText = dogBreed;
    // breedContainer.appendChild(list);
    createBreedList(dogBreed);
  })
}

function selectBreed(dogAll, char) {
  // console.log(dogAll);
  let select = [];
  for(let i=0;i<dogAll.length;i++){
    if (dogAll[i][0] === char) {
      select.push(dogAll[i]);
    }
  }// console.log(selectBreed);
  console.log(select);
  return select;
}

document.addEventListener('DOMContentLoaded', function () {
  fetchDogImage();
  fetchDogBreed();

  const selectMenu = document.querySelector('#breed-dropdown');
  selectMenu.addEventListener('change', function(e){
    e.preventDefault();
    // console.log(e.target.value);
    if(e.target.value === "a") {
      const list = document.getElementById("dog-breeds");
      console.log(list);
      list.innerHTML = '';
      renderBreed(selectBreed(dogAll, "a"));
    }else if(e.target.value === "b"){
      const list = document.querySelector("ul");
      console.log(list);
      list.innerHTML = '';
      renderBreed(selectBreed(dogAll, "b"));
    }else if(e.target.value === "c"){
      const list = document.querySelector("ul");
      console.log(list);
      list.innerHTML = '';
      renderBreed(selectBreed(dogAll, "c"));
    }else if(e.target.value === "d"){
      const list = document.querySelector("ul");
      console.log(list);
      list.innerHTML = '';
      renderBreed(selectBreed(dogAll, "d"));
    }
  })

})