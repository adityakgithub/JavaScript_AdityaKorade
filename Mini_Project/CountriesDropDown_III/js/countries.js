/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    console.log(countries);
    return `<option value="">Please select</option> 
            ${countries.map(country=> 
            `<option value=${country.toLowerCase()}>${country}</option>
            `
    ).join("")}`
}
