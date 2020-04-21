import React from 'react';
import { mount } from 'enzyme';

import ExampleComponent from '../../main/js/ExampleComponent';

describe('ExampleComponent', () => {
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
    testExampleComponent = mount(<ExampleComponent />);
  });

  describe('Snapshot test', () => {
    it('should render a snapshot', () => {
      expect(testExampleComponent.html()).toMatchSnapshot();
    });
  });
});
