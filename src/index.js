console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json)
    const pics = []
    pics.push(json)
    addImages(pics)
  })

  function addImages(pics) {
    const list = document.getElementById('dog-breeds')
    pics.forEach(pic => {
      let item = document.createElement('li')
      item.innerHTML = pic
      list.appendChild(item)

    })

  }
