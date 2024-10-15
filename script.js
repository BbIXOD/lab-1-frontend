'use strict'

const firstStyle = 'modified1'
const secondStyle = 'modified2'

const image = document.getElementById('city-image')
const imageContainer = document.getElementById('city-image-container')
let width = image.clientWidth
let imagePresent = true

const changeStyleById = () => {
    const el = document.getElementById('element4')
    _changeStyle(el)
}

const getElementByQuery = () => {
    const el = document.querySelector('li.query-find')
    _changeStyle(el)
}

const scaleImage = (scaleChange) => {
    if (!imagePresent) return
    width += scaleChange
    image.style.width = width + "px"
}
const deleteImage = () => {
    if (!imagePresent) return
    image.remove()
    imagePresent = false
}
const addImage = () => {
    if (imagePresent) return;
    imageContainer.appendChild(image)
    imagePresent = true
}

const _changeStyle = (el) => {
    const classList = el.classList
    const toFirstStyle = classList.contains(secondStyle)

    classList.remove(toFirstStyle ? secondStyle : firstStyle)
    classList.add(toFirstStyle ? firstStyle : secondStyle)
}