export default class ScopusExampleComponent extends HTMLElement {
  connectedCallback() {
    const countries = [
      { id: 1, label: 'Afghanistan' },
      { id: 2, label: 'Albania' },
      { id: 3, label: 'Algeria' },
      { id: 4, label: 'Angola' },
      { id: 5, label: 'Armenia' },
      { id: 6, label: 'Argentina' },
      { id: 7, label: 'Congo' },
      { id: 8, label: 'Croatia' },
      { id: 9, label: 'France' },
      { id: 10, label: 'Netherlands' },
    ];

    const element = this.querySelector('#autocomplete-example');
    element.onExactSearch = (query) => {
      alert(`Exact search done with query: ${query}`);
    };
    element.onUserTyping = (query) => {
      const suggestions = countries.filter(
        (country) => country.label.indexOf(query) !== -1
      );
      element.suggestions = suggestions;
    };
    element.onSuggestionSelect = (suggestion) => {
      alert(`Suggestion ${suggestion.label} selected`);
    };
  }

  constructor() {
    super();
    let firstName = window.scopus.platform.user.identification.getIdentity()
      .firstName;

    const config = JSON.stringify({
      queryTresholdLength: 2,
      debounceTimeout: 500,
      placeholder: 'Filter a country',
      showClearIcon: true,
      showSearchIcon: true,
      small: true,
    });

    window.onClickIcon = (icon) => {
      alert(`clicked ${icon}`);
    };

    this.innerHTML = `
      <div id='ScopusExampleComponent'>
        <div class="container example-component-flex">
          <div class="example-component-border padding-size-24">
            <section class="row">
              <div class="col-24">
                <h1>Scopus ExampleComponent Example</h1>
                <p>Hello, ${firstName}!  Welcome to Scopus.</p>
                <p class="text-meta--small">This is a full column based on a 24 column grid layout.</p>
                <sc-autocomplete
                  id="autocomplete-example"
                  config='${config}'
                ></sc-autocomplete>
              </div>
            </section>
            <section class="margin-size-24-t">
              <div class="row">
                <h2 class="col">Icons</h2>
              </div>
              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="apple" onclick="onClickIcon('apple')"></sc-icon>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="3d-radiology" onclick="onClickIcon('3d-radiology')"></sc-icon>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="cooking-tools" onclick="onClickIcon('cooking-tools')"></sc-icon>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="couple-of-people" onclick="onClickIcon('couple-of-people')"></sc-icon>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="delivery-van" onclick="onClickIcon('delivery-van')"></sc-icon>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="box">
                    <sc-icon icon-name="descend" onclick="onClickIcon('descend')"></sc-icon>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>`;
  }
}
