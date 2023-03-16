// TODO: call processLogin with the user provided email and password when the form is submitted
const formToBeAccess= document.querySelector("#login-form");
const email = document.querySelector("#login-email");
const pass = document.querySelector("#login-password");

formToBeAccess.addEventListener("submit",event=>{
    event.preventDefault();
    console.log(email.value);
    processLogin(email.value,pass.value)
})


// Do not modify this function
function processLogin(email, password) {}