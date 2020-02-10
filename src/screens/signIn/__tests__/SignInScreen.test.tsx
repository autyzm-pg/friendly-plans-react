import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { i18n } from 'locale';
import { SignInScreen } from '../SignInScreen';

describe('SignInScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<SignInScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to signup on sign up button press', () => {
    const wrapper = shallow(<SignInScreen {...props} />);
    const button = wrapper.find(`Button[title="${i18n.t('signUp:signUp')}"]`);
    button.simulate('press');
    expect(props.navigation.navigate).toBeCalledWith('SignUp');
  });
});
