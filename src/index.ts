import * as ReactDOM from "react-dom";
import InputButton, { style } from "./InputButton";

class InputButtonComponent extends HTMLElement {
  connectedCallback() {
    const placeholder = this.getAttribute("placeholder");
    const mountPoint = this.attachShadow({ mode: "open" });
    mountPoint.innerHTML = `
      <style>${style.toString()}</style>
      <div class="mount-point"></div>
    `;

    ReactDOM.render(
      InputButton({ placeholder }),
      mountPoint.querySelector(".mount-point")
    );
  }

  disconnectedCallback() {
    console.log("disconnected!");
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`);
  }

  adoptedCallback() {
    console.log("adopted!");
  }
}

window.customElements.define("input-button", InputButtonComponent);
