import React from 'react';
import ReactDOM from 'react-dom';
import 'components/dist/scopus-components';
import 'stylesheet/dist/scopus-stylesheet';

import ScopusExampleComponent from './ExampleComponent';
import './ExampleComponent.css';

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
    ReactDOM.render(<ScopusExampleComponent />, this);
  }
}

window.customElements.define('sc-example-component', WebComponent);
