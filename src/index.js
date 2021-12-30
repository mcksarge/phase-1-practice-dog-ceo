console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    let dogImgs = document.getElementById('dog-image-container')
    //Fetches dog Images
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then (response => response.json())
    .then (dogs => {
        let arrDogs = dogs.message
        arrDogs.forEach(url => {
            dogImgs.innerHTML += showDogs(url)
        })
    })

    //Fetches dog Breeds
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => {
        const dogBreed = document.querySelector("#dog-breeds")
        let breedArr = Object.keys(breeds.message)
        breedArr.forEach((breed) => {
            dogBreed.innerHTML += `<li>${breed}</li>`
         })
    })

    //change color of breed when clicked on
    const ul = document.querySelector("#dog-breeds")
    ul.addEventListener('click', (e) => {
        let dog = e.target
        dog.style.color = 'red'
    })


    //Sort breeds by letter chosen in drop down
    const dropDown = document.querySelector("#breed-dropdown")
    dropDown.addEventListener('change', (e) => {
       return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(breeds => {
            let breedArr = Object.keys(breeds.message)
            let filteredArr = breedArr.filter(breed => {
                return breed.startsWith(e.target.value)
            })
        ul.innerHTML = ""
        filteredArr.forEach((breed) => {
            ul.innerHTML += `<li>${breed}</li>`
        })
        })
    })

})

function showDogs(url) { //callback function for dog images
    return `<img src="${url}">`
}





