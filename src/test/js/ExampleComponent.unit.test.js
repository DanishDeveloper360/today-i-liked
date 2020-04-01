import ExampleComponent from '../../main/js/ExampleComponent';

import mount from '@skatejs/bore';

customElements.define('sc-example-component', ExampleComponent);

describe('sc-example-component', () => {
  let testExampleComponent;

  beforeEach(() => {
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
    testExampleComponent = mount(
      `<sc-example-component></sc-example-component>`
    );
  });

  it('should match snapshot', () => {
    expect(testExampleComponent.node.innerHTML).toMatchSnapshot();
  });

  it('should test onClickIcon', () => {
    testExampleComponent.one('sc-icon[icon-name="apple"]').node.click();
    expect(global.alert).toHaveBeenCalled();
  });

  it('should test onClickIcon', () => {
    testExampleComponent.one('button[name="search-icon"]').node.click();
    expect(global.alert).toHaveBeenCalled();
  });
});
