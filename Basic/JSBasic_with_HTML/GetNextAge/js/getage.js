const age=document.querySelector("#your-age");
const nextage=document.querySelector("#next-age");

age.addEventListener("keyup",()=>{
    nextage.textContent=getNextAge(age.value);

})
function getNextAge(age){
    if(this.age===""){
        return 0;
    }
    return Number.parseInt(age,10)+1;
}