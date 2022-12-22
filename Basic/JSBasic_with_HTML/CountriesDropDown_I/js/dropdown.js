



const countries = ["Netherlands", "Japan", "Mongolia"];


const html = getDropdown(countries);

const select = document.querySelector("#countrie");

function getDropdown(countries) {
    console.log(countries);
    let html=`<option value="">Please select</option>`
    countries.forEach(
        (countrie)=>{
            html +=`<option value="${countrie.toLowerCase()}">${countrie}</option>`
        }
    )
    return html;
}

select.innerHTML = html;