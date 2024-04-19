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