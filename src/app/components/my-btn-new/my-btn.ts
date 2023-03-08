import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { registerWC } from '../../utils/global-wc-registration';

// @customElement('my-btn')
export class MyBtnNew extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      button {
        background-color: green;
      }
    `
  ];

  render() {
    return html`<button>My green button</button>`;
  }
}

registerWC('my-btn', MyBtnNew, 1, 3)
registerWC('my-btn', MyBtnNew, 1, 3, 'di-green-btn')
registerWC('my-btn', MyBtnNew, 1, 3, 'di-my-green-btn')