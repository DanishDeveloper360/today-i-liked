import 'components/dist/scopus-components';
import 'stylesheet/dist/scopus-stylesheet';
import ExampleComponentTemplate from './ExampleComponent.html';

export default class ScopusExampleComponent extends HTMLElement {
  constructor() {
    super();

    this._description = '';
    this._icons = [];
    this._countries = [];
    this._config = {};

    this._initialized = false;
  }

  connectedCallback() {
    this.innerHTML = ExampleComponentTemplate;

    // templates
    this.$iconButtonTemplate = this.querySelector(
      '#sc-ExampleComponent--iconButton'
    );

    // elements
    this.$description = this.querySelector('#sc-ExampleComponent--title');
    this.$iconBar = this.querySelector('#sc-ExampleComponent--iconBar');
    this.$autocomplete = this.querySelector(
      '#sc-ExampleComponent--autocomplete'
    );

    // ready to render
    this._initialized = true;

    // render methods
    this._renderDescription();
    this._renderIcons();
    this._setupAutocomplete();
  }

  static get observedAttributes() {
    return ['description', 'icons', 'countries', 'config'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (attributeName) {
        case 'description':
          this._description = newValue;
          this._renderDescription();
          break;
        case 'icons':
          this._icons = JSON.parse(newValue);
          this._renderIcons();
          break;
        case 'countries':
          this._countries = JSON.parse(newValue);
          this._setupAutocomplete();
          break;
        case 'config':
          this._config = JSON.parse(newValue);
          this._setupAutocomplete();
          break;
      }
    }
  }

  disconnectedCallback() {
    this.$iconElements.forEach((icon) =>
      icon.removeEventListener('click', this._iconOnClick)
    );
  }

  // Title Functionality
  _renderDescription() {
    if (this._initialized) this.$description.innerHTML = this._description;
  }

  // // Icon Functionality
  _renderIcons() {
    if (this._initialized) {
      this.$iconElements = this._icons.map((icon) => {
        const $iconElement = document.importNode(
          this.$iconButtonTemplate.content,
          true
        );

        const $iconSVG = $iconElement.querySelector('sc-icon');
        $iconSVG.setAttribute('icon-name', icon);
        $iconSVG.addEventListener('click', this._iconOnClick);

        this.$iconBar.appendChild($iconElement);
        return $iconElement;
      });
    }
  }

  _iconOnClick(event) {
    event.preventDefault();
    alert(`clicked ${this.getAttribute('icon-name')}`);
  }

  // // Autocomplete Functionality
  _setupAutocomplete() {
    if (this._initialized) {
      // Example of how to attach functions with an element selector
      this.$autocomplete.onExactSearch = (query) => {
        alert(`Exact search done with query: ${query}`);
      };
      this.$autocomplete.onUserTyping = (query) => {
        this.$autocomplete.suggestions = this._countries.filter((country) =>
          country.label.includes(query)
        );
      };
      this.$autocomplete.onSuggestionSelect = (suggestion) => {
        alert(`Suggestion ${suggestion.label} selected`);
      };

      this.$autocomplete.config = this._config;
    }
  }

  get description() {
    return this._description;
  }
  set description(value) {
    this.setAttribute('description', value);
  }

  get icons() {
    return this._icons;
  }
  set icons(value) {
    this.setAttribute('icons', JSON.stringify(value));
  }

  get countries() {
    return this._countries;
  }
  set countries(value) {
    this.setAttribute('countries', JSON.stringify(value));
  }

  get config() {
    return this._config;
  }
  set config(value) {
    this.setAttribute('config', JSON.stringify(value));
  }
}
