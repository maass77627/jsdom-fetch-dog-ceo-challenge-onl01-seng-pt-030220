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

  const ul = document.getElementById("dog-breeds")

  for (const picture of doggys) {
    let li = document.createElement("li")
    li.innerHTML = picture
    ul.appendChild(li)
};


}
