console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMcontentLoaded", function(e){

 })




const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

function fetchDogs() {
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json) {
    doggyPictures(json.message);
  });

};

function doggyPictures(json){
let container = document.getElementById("dog-image-container");
  for (var i = 0; i < json.length; i++)
  {
    var img = document.createElement('img');
    img.src = json[i];
    container.appendChild(img);
  }
};

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchBreeds(){
  fetch(breedUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){

    let jawn = Object.keys(json.message)
    let dogtype;
    doggyBreeds(jawn);
  });
};

function doggyBreeds(json){

  for (var i = 0; i < json.length; i++) {
      var dogbreedname = json[i];
      let ul = document.getElementById("dog-breeds");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(dogbreedname));
      ul.appendChild(li);
      li.addEventListener("click", function(e){
        console.log(e.target);
        let color = ["blue", "teal", "green", "yellow", "purple","red","pink", "orange", "magenta"];
        e.target.style.color = (color[Math.floor (Math.random()*color.length)]);
      })
    }
};

function displayByLetter(){
    const breedLetterSelect = document.getElementById('breed-dropdown');
    breedLetterSelect.addEventListener('change', function(e){
        let letter = e.target.value
        let breedList = document.querySelectorAll('.breed-class')
        for(let i = 0; i < breedList.length; i++){
            if(letter === ' '){
                if(breedList[i].hasAttribute('hidden')){
                    breedList[i].removeAttribute('hidden')
                }
            } else if(breedList[i].innerText.charAt(0) !== letter){
                breedList[i].hidden = true;
            } else {
                if(breedList[i].hasAttribute('hidden')){
                    breedList[i].removeAttribute('hidden')
                }
            }
        }
    });
}

function addLetterSelect(){
    const breedLetterSelect = document.getElementById('breed-dropdown');
    let alphabet = ['z','y','x','w','v','u','t',
    's','r','q','p','o','n','m','l','k','j','i',
    'h','g','f','e','d','c','b','a',' ']
    for(let i = 0; i < alphabet.length;i++){
        let currOption = document.createElement('option')
        if(alphabet[i] !== " "){
            currOption.innerText = alphabet[i]
            currOption.value = alphabet[i]
        } else {
            currOption.innerText = "Show All"
            currOption.value = alphabet[i]
            currOption.selected = true;
        }
        breedLetterSelect.appendChild(currOption);
    }
}

fetchDogs();
fetchBreeds();
