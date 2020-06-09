import React from 'react';
import ReactDOM from 'react-dom';

import ScopusTesting from './Testing';
import './Testing.css';

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
    ReactDOM.render(<ScopusTesting />, this);
  }
}

window.customElements.define('sc-testing', WebComponent);
