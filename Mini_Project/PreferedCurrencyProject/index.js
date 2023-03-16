// TODO: When the user clicks on a `.card``, it should add/remove the class `active`
const cards = document.querySelectorAll(".card")

const handleEvent = event =>{
    cards.forEach(card=>{
        card.classList.remove("active");
    })
    event.currentTarget.classList.toggle("active");
}
cards.forEach((card)=>{
    card.addEventListener("click",handleEvent)
})