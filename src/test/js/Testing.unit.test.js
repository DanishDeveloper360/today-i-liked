import React from 'react';
import { mount } from 'enzyme';

import Testing from '../../main/js/Testing';

describe('Testing', () => {
  let testTesting;

  beforeEach(async () => {
    global.scopus = {
      platform: {
        configuration: {
          getComponentConfiguration() {
            return {
              FOO_ENABLED: true,
              BAR_ENABLED: false,
            };
          },
        },
        user: {
          identification: {
            getIdentity: jest.fn(() => ({
              firstName: 'testing-username',
            })),
          },
        },
      },
    };
    global.alert = jest.fn();
    testTesting = mount(<Testing />);
  });

  describe('Snapshot test', () => {
    it('should render a snapshot', () => {
      expect(testTesting.html()).toMatchSnapshot();
    });
  });
});
