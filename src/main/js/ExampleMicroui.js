import React, { useEffect, useRef } from 'react';
function ExampleMicroui() {
  const autocompleteRef = useRef();

  let { firstName } = window.scopus.platform.user.identification.getIdentity();

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

  const ICONS = [
    'apple',
    '3d-radiology',
    'cooking-tools',
    'couple-of-people',
    'delivery-van',
    'descend',
  ];

  useEffect(() => {
    autocompleteRef.current.onExactSearch = (query) => {
      alert(`Exact search done with query: ${query}`);
    };
    autocompleteRef.current.onUserTyping = (query) => {
      autocompleteRef.current.suggestions = countries.filter(
        (country) => country.label.indexOf(query) !== -1
      );
    };
    autocompleteRef.current.onSuggestionSelect = (suggestion) => {
      alert(`Suggestion ${suggestion.label} selected`);
    };
    autocompleteRef.current.config = {
      queryTresholdLength: 2,
      debounceTimeout: 500,
      placeholder: 'Filter a country',
      showClearIcon: true,
      showSearchIcon: true,
      small: true,
    };
  }, []);

  return (
    <div id="ScopusExampleMicroui">
      <div className="container sc-ExampleMicroui--flex">
        <section className="row">
          <div className="col-24">
            <h1>Scopus ExampleMicroui Example</h1>
            <p>Hello, {firstName}! Welcome to Scopus.</p>
            <p className="text-meta--small">
              This is a full column based on a 24 column grid layout.
            </p>
            <sc-autocomplete
              ref={autocompleteRef}
              id="autocomplete-example"
            ></sc-autocomplete>
          </div>
        </section>
        <section className="margin-size-24-t">
          <div className="row">
            <h2 className="col">Icons</h2>
          </div>
          <div className="row">
            {ICONS.map((icon) => (
              <div className="col-12 col-md-4" key={icon}>
                <div className="box">
                  <sc-icon
                    icon-name={icon}
                    onClick={() => alert(`clicked ${icon}`)}
                  ></sc-icon>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

ExampleMicroui.propTypes = {};

export default ExampleMicroui;
