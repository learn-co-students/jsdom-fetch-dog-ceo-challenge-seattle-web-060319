document.addEventListener("DOMContentLoaded", (e) => {
  fetchDogs()
  fetchDogBreeds()
  const dropDown = document.getElementById("breed-dropdown");
  dropDown.addEventListener("change", function(e) {
    let existing = document.querySelector("#dog-breeds")
    existing.innerHTML = ""
    listBreeds(breeds, this.value)


    });
});

const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "purple", "grey", "brown"]



async function fetchDogs () {
  resp = await fetch("https://dog.ceo/api/breeds/image/random/4")
  json = await resp.json()
  displayDogs(json.message)

}

async function fetchDogBreeds() {
  resp = await fetch("https://dog.ceo/api/breeds/list/all")
  json = await resp.json()
  breeds = json.message
  listBreeds(breeds)
}

function displayDogs(dogs) {
  const dogImgContainer = document.querySelector("#dog-image-container")
    for (i = 0; i < dogs.length; i++) {
      dogImage = document.createElement("img")
      dogImage.src = dogs[i]
      dogImgContainer.appendChild(dogImage)
    }
  }

function listBreeds(breeds, filter = "all") {
  const dogBreedContainer = document.getElementById("dog-breeds")
    for (var breedName in breeds) {
      if (breeds[breedName] === []) {
        if (filterDogBreeds(breed, filter) || filter === "all") {
        breedItem = document.createElement("li")
          breedItem.textContent = breedName
          breedItem.addEventListener("click", function(e){
            e.target.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
          })
          dogBreedContainer.appendChild(breedItem)}}
      else {
          for (i = 0; i < breeds[breedName].length; i++) {
            let breed = `${breeds[breedName][i]} ${breedName}`
            if (filterDogBreeds(breed, filter) || filter === "all") {
          breedItem = document.createElement("li")
          breedItem.textContent = breed
          breedItem.addEventListener("click", function(e){
            e.target.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
          })
          dogBreedContainer.appendChild(breedItem)
        }}}

        }
        }
    function filterDogBreeds(breed, filter) {
      if (breed.startsWith("a") && filter === 'a'){
        return true
      }
      else if (breed.startsWith("b") && filter === 'b'){
        return true
      }
      else if (breed.startsWith("c") && filter === 'c'){
        return true
      }
      else if (breed.startsWith("d") && filter === 'd'){
        return true
      }
      else {
        return false
      }
    }
