document.addEventListener("DOMContentLoaded", function(){

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json)
    })


})
