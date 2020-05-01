import React from 'react';
import { mount } from 'enzyme';

import ExampleMicroui from '../../main/js/ExampleMicroui';

describe('ExampleMicroui', () => {
  let testExampleMicroui;

  beforeEach(async () => {
    global.scopus = {
      platform: {
        user: {
          identification: {
            getIdentity: jest.fn(() => ({
              firstName: 'example-microui-username',
            })),
          },
        },
      },
    };
    global.alert = jest.fn();
    testExampleMicroui = mount(<ExampleMicroui />);
  });

  describe('Snapshot test', () => {
    it('should render a snapshot', () => {
      expect(testExampleMicroui.html()).toMatchSnapshot();
    });
  });
});