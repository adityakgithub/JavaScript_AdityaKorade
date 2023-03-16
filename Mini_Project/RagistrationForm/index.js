// TODO: call the completeRegistration function with the user input when the form is submitted
const formToBeAccess= document.querySelector("#register-form");
const email = document.querySelector("#register-email");
const pass = document.querySelector("#register-password");
const name = document.querySelector("#register-name")

formToBeAccess.addEventListener("submit",event=>{
    event.preventDefault();
    console.log(email.value);
    console.log(name.value)
    completeRegistration(name.value,email.value,pass.value)
})


// Do not modify this function
function completeRegistration(name, email, password) {
    console.log({name, email, password});
}
