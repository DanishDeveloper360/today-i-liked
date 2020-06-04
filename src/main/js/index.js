import React from 'react';
import ReactDOM from 'react-dom';

import ScopusExampleMicroui from './ExampleMicroui';
import './ExampleMicroui.css';

const WATCHED_ATRIBUTES = {};
export default class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return Object.keys(WATCHED_ATRIBUTES);
  }

  connectedCallback() {
    this.renderWebComponent();
  }

  renderWebComponent() {
    ReactDOM.render(<ScopusExampleMicroui />, this);
  }
}

window.customElements.define('sc-example-microui', WebComponent);
