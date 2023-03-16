// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const sidebar=document.querySelector("#app-sidebar")
const button=document.querySelector("#menu-sidebar")

button.addEventListener("click",()=>{
    sidebar.classList.toggle("show");
})