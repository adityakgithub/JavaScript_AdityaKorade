// class DashboardStats extends HTMLElement{
//     constructor(){
//         super();
//     }
// }
// window.customElements.define("dashboard-stats",DashboardStats);
class DashboardStats extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});    
    }
    connectedCallback(){
        const tempLarge = document.querySelector("#dashboard-large-template");
        //const tempSmall = document.querySelector("#dashboard-small-template");
    const checkSizeString = this.getAttribute("size");
        checkSizeString==="large"? this.shadowRoot.appendChild(tempLarge.content.cloneNode(true)):
        this.shadowRoot.appendChild(tempSmall.content.cloneNode(true));
    }
    disconnectedCallback(){

    }
}

window.customElements.define("dashboard-stats",DashboardStats);