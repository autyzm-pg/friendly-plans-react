import { shallow } from 'enzyme';
import React from 'react';
import firebase from 'react-native-firebase';
import SplashScreen from 'react-native-splash-screen';

import { navigationMock } from 'helpers';
import { WelcomeScreen } from '../WelcomeScreen';

describe('WelcomeScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<WelcomeScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide splashscreen on unmount', () => {
    const wrapper = shallow(<WelcomeScreen {...props} />);
    const instance = wrapper.instance() as WelcomeScreen;
    const spy = jest.spyOn(SplashScreen, 'hide');
    instance.componentWillUnmount();
    expect(spy).toBeCalled();
  });

  it('should navigate to unauthenticated if user is not logged in', () => {
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      currentUser: null,
    }));
    shallow(<WelcomeScreen {...props} />);
    expect(props.navigation.navigate).toBeCalledWith('Unauthenticated');
    jest.resetAllMocks();
  });

  it('should navigate to authenticated if user is logged in', () => {
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      currentUser: { email: 'email@domain.com' },
    }));
    shallow(<WelcomeScreen {...props} />);
    expect(props.navigation.navigate).toBeCalledWith('Authenticated');
    jest.resetAllMocks();
  });
});
