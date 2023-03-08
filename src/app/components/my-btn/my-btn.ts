import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { registerWC } from '../../utils/global-wc-registration';


// @customElement('my-btn')
export class MyBtn extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      button {
        background-color: lightblue;
      }
    `
  ];

  render() {
    return html`<button>My blue button</button>`;
  }
}

registerWC('my-btn', MyBtn, 1, 1)
registerWC('my-btn', MyBtn, 1, 1, 'di-blue-btn')
registerWC('my-btn', MyBtn, 1, 1, 'di-my-blue-btn')