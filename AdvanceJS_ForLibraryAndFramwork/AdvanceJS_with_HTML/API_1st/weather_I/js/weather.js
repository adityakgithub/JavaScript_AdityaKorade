import { getCountry,getTemperature,getIcon } from "../js/weather2";


const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temperature");
const country = document.querySelector("#country");

fetch(`https://learn-javascript-demo-default-rtdb.firebaseio.com/weather/amsterdam.json`)
.then( response=> response.json())
.then( data => {
    icon.src = getIcon(data);
    temperature.textContent = getTemperature(data);
    country.textContent = getCountry(data);
})
.catch(error => console.error(error));
