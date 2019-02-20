import { shallow } from 'enzyme';
import React from 'react';

import { ResetPasswordScreen } from '../ResetPasswordScreen';

describe('ResetPasswordScreen', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ResetPasswordScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
