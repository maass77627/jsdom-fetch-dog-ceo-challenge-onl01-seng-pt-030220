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

function picsOnDom(array) {
//for (i = 0; i < json.length; i++)
  //json[i]
  const ul = document.getElementById("dog-breeds")
  //let li = document.createElement("li")
  //json.forEach(function(picture) {
  for (const picture of array) {
    let li = document.createElement("li")
    li.innerHTML = picture
    ul.appendChild("li")
};
// for (const element of myArray) {
//   console.log(element);
// }

}
