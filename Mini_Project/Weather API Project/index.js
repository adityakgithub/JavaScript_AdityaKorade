// TODO
import FetchWrapper from "./fetch-wrapper.js"

const select = document.querySelector("#cities-dropdown");
const result = document.querySelector("#weather-result");
const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack")
select.addEventListener("change",event=>{
    console.log(event.currentTarget.value);
    API.get(`/${event.currentTarget.value}.json`).then(data=>{
        console.log(data.current.temperature)
        result.textContent=`It's ${data.current.temperature} degrees celsius.`
    }).catch(Error=>{
        console.error(Error);
    }).finally(()=>{
        console.log("finally....");
    })
})