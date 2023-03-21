import {data} from "./data.js";

const results = document.querySelector("#results-list");
const search = document.querySelector("#app-search");

const render = (query = "") => {
    console.log(data)
    const cleanedupQuery = query.trim().toLowerCase();
    const filtered = data.filter(item => item.spacecraft.toLowerCase().includes(cleanedupQuery));

    results.innerHTML = "";
    filtered.forEach(item => {
        results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
    });
}

// render as the user types
search.addEventListener("keyup", () => {
    render(search.value);
});

// render on page load
render();




// import {data} from "./data.js";
// //console.log(data());
// console.log(data().then(result=>console.log(result)));
// const results = document.querySelector("#results-list");
// const search = document.querySelector("#app-search");

// const render = (query = "") => {
//     const cleanedupQuery = query.trim().toLowerCase();
//     //const filtered = data.filter(item => item.spacecraft.toLowerCase().includes(cleanedupQuery));
    
    

//     results.innerHTML = "";
//     // filtered.forEach(item => {
//     //     results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
//     // });
//     data().then(result=>{
//         return result.filter(item => item.spacecraft.toLowerCase().includes(cleanedupQuery))
//     }).forEach(item => {
//         results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
//     });
// }

// // render as the user types
// search.addEventListener("keyup", () => {
//     render(search.value);
// });

// // render on page load
// render();