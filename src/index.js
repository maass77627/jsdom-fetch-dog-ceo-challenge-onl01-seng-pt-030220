document.addEventListener("DOMContentLoaded", function(){

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response){
  return response.json()
})
.then(function(json){
  //console.log(json)
  let dogs = json.message
  dogsondom(dogs)
}) 

function dogsondom(dogs) {
  const ul = document.getElementById("dog-image-container")
    for (const dog of dogs) {
      //console.log(dog)
      let image = document.createElement("img")
      image.src = dog
      ul.appendChild(image)
    }
}

    fetch('https://dog.ceo/api/breeds/list/all')
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        //console.log(json)
        let breeds = json.message
        let breed = Object.keys(breeds)
        breedsondom(breed)
      })


    function breedsondom(breed) {
      const ulTwo = document.getElementById("dog-breeds")
        for(const pup of breed){
            let liTwo = document.createElement("li")
            liTwo.innerHTML = pup
            ulTwo.appendChild(liTwo)
            liTwo.addEventListener("click", function(e){
              console.log(e)
              e.target.style.color = "blue"
            })
        }
        filterbreeds(breed)
    }

    function filterbreeds(breed) {
      let selector = document.getElementById("breed-dropdown")
      selector.addEventListener("change", function(e){
        let values = e.target.value
       
        switch (values) {
          case values = "a":
                let breedtwo = breed.filter(dog => dog.charAt(0) == "a")
                filter(breedtwo)
                break
          case values = "b":
            let breedthree = breed.filter(dog => dog.charAt(0) == "b")
            filter(breedthree)
            break
          case values = "c":
            let breedfour = breed.filter(dog => dog.charAt(0) == "c")
            filter(breedfour)
            break
          case values = "d":
            let breedfive = breed.filter(dog => dog.charAt(0) == "d")
            filter(breedfive)
            break
        }

      })
      }
         function filter(array) {
          console.log(array)
          const list = document.getElementById("dog-breeds")
          list.innerHTML = ""
          for (const element of array) {
            let listitem = document.createElement("li")
            listitem.innerHTML = element
            list.appendChild(listitem)
          }
         }
  
  })








