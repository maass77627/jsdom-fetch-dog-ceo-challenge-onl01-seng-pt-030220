

// document.addEventListener("DOMContentLoaded", function(){
  

//   fetch('https://dog.ceo/api/breeds/list/all')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json.message)
//     let breeds = Object.keys(json.message)
//     addBreeds(breeds)
//   })
  
//   fetch("https://dog.ceo/api/breeds/image/random/4")
//   .then((response) => response.json())
//   .then((json) => {
//     let dogs = json.message
//     addDogs(dogs)
//   })


//   function addDogs(dogs) {
//      let container = document.getElementById('dog-image-container')
//      for (let dog of dogs) {
//      console.log(dog)
//      let div = document.createElement('div')
//      let image = document.createElement('img')
//      image.src = dog
//      div.appendChild(image)
//      container.appendChild(div)
//      }
//   }

// function addBreeds(breeds) {
 

//   for (let breed of breeds) {
//     let ul = document.getElementById('dog-breeds')
//     let li = document.createElement('li')
//     li.addEventListener('click', () => { li.style.color = 'red'})
//     li.innerHTML = breed
//     ul.appendChild(li)
//   }
// }

// })


  // function breedFilter() {
  //     let drop = document.getElementById('breed-dropdown')
  //    let value = drop.value

  //  if (value == "a") {
  //    let newbreeds = breeds.find((breed) => breed.charAt(0) == "a")
  //  } else if (value == "b") {
  //   let newbreeds = breeds.find((breed) => breed.charAt(0) == "b")
  // } else if (value == "c") {
  //   let newbreeds = breeds.find((breed) => breed.charAt(0) == "c")
  // } else if (value == "d") {
  //   let newbreeds = breeds.find((breed) => breed.charAt(0) == "d")
  // } else {
  //   let newbreeds = breeds
  // }
  // return newbreeds
  // }
  









document.addEventListener("DOMContentLoaded", function(){

fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(function(response){
  return response.json()
 })
 .then(function(json){
  console.log(json)
 let dogs = json.message
  dogsondom(dogs)
}) 

function dogsondom(dogs) {
  const ul = document.getElementById("dog-image-container")
    for (const dog of dogs) {
      
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








