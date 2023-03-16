

export default class FakeComponent {
    constructor() {
        this.hasRendered = false;
        if (!this.render) {
            throw Error(`Component ${this.constructor.name} is missing a render() function`);
        }
        const html = this.render();
        if (!html || typeof html !== "string") {
            throw Error(`Component ${this.constructor.name}'s render() must return an HTML string`);
        }
        document.body.insertAdjacentHTML("beforeend", html);
        // simulate delay
        setTimeout(() => {
            if (this.afterFirstRender) {
                this.afterFirstRender();
            }
        }, 300);
    }
}