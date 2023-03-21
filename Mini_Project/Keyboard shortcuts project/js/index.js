import {init, toggleModal} from "./attendees.js";

// this function adds an event listener on the + button which then opens the modal
init();

// const modal = document.querySelector("#app-modal");

// document.addEventListener("keyup", event => {
//     const key = event.key;
//     if (key === "n" && !modal.classList.contains("show")) {
//         toggleModal();
//     }
//     if (key === "Escape" && modal.classList.contains("show")) {
//         toggleModal();
//     }
// });

const modal = document.querySelector("#app-modal");

document.addEventListener("keyup",event=>{
    if(event.key==="n"&& !(modal.classList.contains("show"))){
        toggleModal();
    }
    if(event.key==="Escape" && modal.classList.contains("show")){
        toggleModal();
    }
})