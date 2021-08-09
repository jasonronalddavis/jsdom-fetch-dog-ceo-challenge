document.addEventListener('DOMContentLoaded', () => {

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    //retrieve array images
    // turn it into  img element
    // appennd to DOM
let imgsArray = imgs.map((img) => {
let i = '<img src=${img}>'
console.log(img)
console.log(i)
return i
})


})


console.log(container)
})




