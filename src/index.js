document.addEventListener("DOMContentLoaded", function(){

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json)
      picsOnDom(json)
    })
})

function picsOnDom(json) {
//for (i = 0; i < json.length; i++)
  //json[i]
  const ul = document.getElementById("dog-breeds")
  //let li = document.createElement("li")
  json.forEach(function(picture) {
    let li = document.createElement("li")
    li.innerHTML = picture
    ul.appendChild("li")
});

}
