// TODO: implement tabs
const btns = document.querySelectorAll("button")

const handleEvent = event =>{
    // btns.forEach((btn)=>{
    //     btn.classList.remove("active");
    // })
    document.querySelector(".tab.active").classList.remove("active")
    event.currentTarget.classList.add("active");
    // document.querySelectorAll("p").forEach((p)=>{
    //     p.classList.remove("show");
    // })
    document.querySelector(".tab-content.show").classList.remove("show")
    console.log(document.querySelector(`${event.currentTarget.dataset.content}`).textContent)
    document.querySelector(`${event.currentTarget.dataset.content}`).classList.add("show");
    

}
btns.forEach((btn)=>{
    btn.addEventListener("click",handleEvent)
})