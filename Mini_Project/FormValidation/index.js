// TODO: add 'success' class on #user-name when the user leaves the input and it has at least 6 characters otherwise add the class 'error'
// const name = document.querySelector("#user-name");

// name.addEventListener("blur",event=>{
//     console.log(name.value.length)
//     if(name.value.length>=6){
//         name.classList.remove("error")
//         name.classList.add("success")
//     } else{
//         name.classList.remove("success")
//         name.classList.add("error")
//     }
// })

const name = document.querySelector("#user-name")

name.addEventListener("blur",event=>{
    console.log(event.currentTarget.value);
    if(event.currentTarget.value.length>=6){
        event.currentTarget.classList.remove("error")
        event.currentTarget.classList.add("success")
    } else{
        event.currentTarget.classList.remove("success")
        event.currentTarget.classList.add("error")
    }
    
})