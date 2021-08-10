const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function getImages(){
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
const imgs = images.message
let imgsArray = createImgElement(imgs)
renderElement(imgsArray)

})
}


function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
})
}
function renderImgs(imgsArray){
imgsArray.forEach(element => {
    renderImg(element)
    })
}

function renderImg(element){
    container.innerHTML += element
}

function renderElement(element){
   container.innerHTml += element 
}


function getBreeds(){
fetch(breedUrl)
.then(resp => resp.json())
.then(breeds => {
    const breedsArray = Object.keys(breeds.message)
const breedsList = createLiElement(breedsArray)
renderList(breedsList)
debugger;
// let imgsArray = createImgElement(imgs)
// renderImg(imgsArray)
})
}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
})
}

function renderList(breedsList){
breedsList.forEach(element => {
renderElement(element)
})
}

//getImages()
getBreeds()

   //retrieve array images
    // turn it into  img element
    // appennd to DOM