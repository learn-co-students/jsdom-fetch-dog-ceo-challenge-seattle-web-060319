console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchDogs() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderDogs(json.message));
}

function fetchBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      allBreeds = Object.keys(json.message);
      renderBreeds(Object.keys(json.message));
    });
}

function renderDogs(arr) {
  const dogImages = document.getElementById("dog-image-container");
  arr.forEach(url => {
    let dogImage = document.createElement("img");
    dogImage.setAttribute("src", url);
    dogImages.appendChild(dogImage);
  });
}

function renderBreeds(arr) {
  const list = document.querySelector("ul");
  list.innerHTML = "";
  arr.forEach(breed => {
    let liBreed = document.createElement("li");
    liBreed.innerText = breed;
    list.appendChild(liBreed);
    liBreed.addEventListener("click", liChangeColor);
  });
}

function liChangeColor(e) {
  //   e.target.style.color = "red";
  e.target.classList.toggle("red");
}

document.addEventListener("DOMContentLoaded", function() {
  fetchDogs();
  fetchBreeds();

  const dropdown = document.getElementById("breed-dropdown");

  dropdown.addEventListener("change", function(e) {
    if (e.target.selectedIndex == 0) {
      arr = allBreeds;
    } else {
      arr = allBreeds.filter(function(breed) {
        return breed.startsWith(e.target.value);
      });
    }
    renderBreeds(arr);
  });
});
