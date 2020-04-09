import ExampleComponent from '../../main/js/ExampleComponent';

import mount from '@skatejs/bore';

customElements.define('sc-example-component', ExampleComponent);

describe('sc-example-component', () => {
  let testExampleComponent;

  beforeEach(async () => {
    global.scopus = {
      platform: {
        user: {
          identification: {
            getIdentity: jest.fn(() => ({
              firstName: 'example-component-username',
            })),
          },
        },
      },
    };
    global.alert = jest.fn();
    testExampleComponent = await mount(
      `<sc-example-component></sc-example-component>`
    );
    testExampleComponent.node.icons = [
      'apple',
      '3d-radiology',
      'cooking-tools',
      'couple-of-people',
      'delivery-van',
      'descend',
    ];

    testExampleComponent.node.countries = [
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

    testExampleComponent.node.config = {
      queryTresholdLength: 2,
      debounceTimeout: 500,
      placeholder: 'Filter a country',
      showClearIcon: true,
      showSearchIcon: true,
      small: true,
    };
  });

  it('should match snapshot', () => {
    expect(testExampleComponent.node.outerHTML).toMatchSnapshot();
  });

  it('should render with basic elements', () => {
    expect(testExampleComponent.node._initialized).toBe(true);
    expect(testExampleComponent.node._icons.length).toBe(6);
  });

  it('should test onClickIcon', () => {
    const result = testExampleComponent.one('button[name="search-icon"]');
    console.log(result);
    testExampleComponent.one('sc-icon[icon-name="apple"]').node.click();
    expect(global.alert).toHaveBeenCalledWith('clicked apple');
  });
});
