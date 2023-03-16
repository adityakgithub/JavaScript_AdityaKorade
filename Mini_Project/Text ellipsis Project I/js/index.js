
const input = document.querySelector("#input");
const output = document.querySelector("#output");


input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});

function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.substring(0,10)

}




