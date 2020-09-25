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
console.log(json)
breedsDom(json)
})

function breedsDom(breeds) {
const ulTwo = document.getElementById("dog-breeds")
for (const breed of breeds) {
  let liTwo = document.createElement("li")
  liTwo.innerHTML = breed
  ulTwo.appendChild(liTwo)
}
}

}
