document.addEventListener("DOMContentLoaded", function(){


  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json)
      picsOnDom(json.message)
});
    })

function picsOnDom(doggys) {
const ul = document.getElementById("dog-image-container")
    for (const picture of doggys) {
    let image = document.createElement("img")
    image.src = picture
    ul.appendChild(image)
};

fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response){
  return response.json()
})
.then(function(json){
//console.log(json)
let newjson = Object.keys(json.message)
breedsDom(newjson)
})

function breedsDom(breeds) {
  //challengeFour();
const ulTwo = document.getElementById("dog-breeds")
for (x in breeds) {
  let liTwo = document.createElement("li")
  liTwo.innerHTML = breeds[x]
  ulTwo.appendChild(liTwo)
  liTwo.addEventListener("click", function(event){
    event.target.style.color = "blue";
  })
}
challengeFour(breeds)
}

function challengeFour(breeds) {
  let selector = document.getElementById("breed-dropdown")
  let newBreeds = []
  if (selector.value === "a") {
    for (x in breeds) {
    if (breeds[x].startsWith("a")){
      newBreeds.push(breeds[x])
    }
    breedsDom(newBreeds)
    }

  }

}

}
