'use strict'

const firstStyle = 'modified1'
const secondStyle = 'modified2'

const changeStyleById = () => {
    const el = document.getElementById('element4')
    changeStyle(el)
}

const getElementByQuery = () => {
    const el = document.querySelector('li.query-find')
    changeStyle(el)
}

const changeStyle = (el) => {
    const classList = el.classList
    const toFirstStyle = classList.contains(secondStyle)

    classList.remove(toFirstStyle ? secondStyle : firstStyle)
    classList.add(toFirstStyle ? firstStyle : secondStyle)
}