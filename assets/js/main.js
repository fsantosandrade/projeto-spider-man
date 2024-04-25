function handleMouseEnter(){
    this.classList.add('card-hovered')
    document.body.id = this.id
}

function handleMouseLeave(){
    this.classList.remove('card-hovered')
    document.body.id = ''
}

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName('card')
    console.log(cardElements)

    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i]
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCards)

const carrosel = document.querySelector('.carrosel')
const transform = carrosel.style.transform
const rotate = transform.match(/rotateY\((-?\d+deg)\)/i)

function selectCarroselItem(selected) {
    const selectedItem = selected.id

    const rotacao = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotate[0], `rotateY(${rotacao}deg)`)

    carrosel.style.transform = newTransform  

    const buttonActive = document.querySelector('.active')
    buttonActive.classList.remove('active')

    selected.classList.add('active')
}


const arrow2 = document.querySelector('.arrow-right')
const arrow1 = document.querySelector('.arrow-left')


function clickArrowLeft(selected) {
    const selectedArrow = selected.id
    let arrowValue = Number(selectedArrow) - 2
    const rotacao = 120 * arrowValue
    const newTransform = transform.replace(rotate[0], `rotateY(${rotacao}deg)`)
    
    carrosel.style.transform = newTransform
    
    arrow1.id = ''
    arrow1.id = Number(selectedArrow) + 1
    
    arrow2.id -= 1
}

function clickArrowRight(selected) {
    const selectedArrow = selected.id
    let arrowValue = Number(selectedArrow) - 3
    const rotacao = -120 * arrowValue
    const newTransform = transform.replace(rotate[0], `rotateY(${rotacao}deg)`)
    
    carrosel.style.transform = newTransform
    
    arrow2.id = ''
    arrow2.id = Number(selectedArrow) + 1

    arrow1.id -= 1
}