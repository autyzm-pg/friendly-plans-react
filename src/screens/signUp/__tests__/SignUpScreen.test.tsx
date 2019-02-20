import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { SignUpScreen } from '../SignUpScreen';

describe('SignUpScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<SignUpScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
