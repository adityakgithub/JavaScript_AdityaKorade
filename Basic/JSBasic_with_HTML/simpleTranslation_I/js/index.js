
const dropdown = document.querySelector("#countries");
const output = document.querySelector("#output");

const translations = {
    welcome: {
        dutch: "Welkom",
        french: "Bienvenue",
        english: "Welcome"
    }
}

const getTranslation = (language) => {
    console.log(translations);
    console.log(language);
    // const trKeys=Object.keys(translations.welcome);
    // console.log(trKeys)
    // for(let i in trKeys){
    //     if(trKeys[i]==language){
    //         return translations.welcome[trKeys[i]]
    //     }
    // }
    return translations.welcome[language]
    
    
}

dropdown.addEventListener("change", () => {
    output.textContent = getTranslation(dropdown.value);
});

