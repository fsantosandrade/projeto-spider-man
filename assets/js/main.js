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

function selectCarroselItem(selected) {
    const selectedItem = selected.id
    const carrosel = document.querySelector('.carrosel')
    const transform = carrosel.style.transform
    const rotate = transform.match(/rotateY\((-?\d+deg)\)/i)
    const rotacao = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotate[0], `rotateY(${rotacao}deg)`)

    carrosel.style.transform = newTransform  

    const buttonActive = document.querySelector('.active')
    buttonActive.classList.remove('active')

    selected.classList.add('active')
}