import { shallow } from 'enzyme';
import React from 'react';
import { Alert } from 'react-native';
import firebase from 'react-native-firebase';

import { i18n } from 'locale';
import { NavigationService } from 'services';
import { SignInAsAnonymousButton } from '../SignInAsAnonymousButton';

describe('SignInAsAnonymousButton', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignInAsAnonymousButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to authenticated view after sign in', async () => {
    const wrapper = shallow(<SignInAsAnonymousButton />);
    const instance = wrapper.instance() as SignInAsAnonymousButton;
    const spy = jest.spyOn(NavigationService, 'navigate').mockImplementation(jest.fn());
    await instance.signInAnonymously();
    expect(spy).toBeCalledWith('Authenticated');
    jest.clearAllMocks();
  });

  it('should not navigate to authenticated if sign in fails and show error alert', async () => {
    const wrapper = shallow(<SignInAsAnonymousButton />);
    const instance = wrapper.instance() as SignInAsAnonymousButton;
    const navigateSpy = jest.spyOn(NavigationService, 'navigate');
    const alertSpy = jest.spyOn(Alert, 'alert');
    const error = {
      message: 'error occured!',
    };
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      signInAnonymously: jest.fn(() => Promise.reject(error)),
    }));
    await instance.signInAnonymously();
    expect(navigateSpy).not.toBeCalled();
    expect(alertSpy).toBeCalledWith(i18n.t('common:error'), error.message);
  });
});
