import { shallow } from 'enzyme';
import React from 'react';
import firebase from 'react-native-firebase';

import { NavigationService } from 'services';
import { SignInFormContainer } from '../SignInFormContainer';

describe('SignInFormContainer', () => {
  const props = {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    values: {
      email: 'email@domain.com',
      password: 'topsecretpassword',
    },
    errors: {
      email: '',
      password: '',
    },
    touched: {
      email: false,
      password: false,
    },
    handleSubmit: jest.fn(),
  } as any;

  it('should match snapshot', () => {
    const wrapper = shallow(<SignInFormContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form correctly', () => {
    const wrapper = shallow(<SignInFormContainer />);
    const instance = wrapper.instance() as SignInFormContainer;
    const form = shallow(instance.renderForm(props));
    expect(form).toMatchSnapshot();
  });

  it('should navigate to authenticated on successful submit', async () => {
    const wrapper = shallow(<SignInFormContainer />);
    const instance = wrapper.instance() as SignInFormContainer;
    const data = {
      email: 'email@domain.com',
      password: 'topsecretpa$$w0rd',
    };
    const spy = jest.spyOn(NavigationService, 'navigate').mockImplementation(jest.fn());
    await instance.onSubmit(data);
    expect(spy).toBeCalledWith('Authenticated');
    jest.resetAllMocks();
  });

  it('should not navigate to authenticated on failed submit', async () => {
    const wrapper = shallow(<SignInFormContainer />);
    const instance = wrapper.instance() as SignInFormContainer;
    const data = {
      email: 'email@domain.com',
      password: 'topsecretpa$$w0rd',
    };
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      signInWithEmailAndPassword: jest.fn(() => Promise.reject('error')),
    }));
    const spy = jest.spyOn(NavigationService, 'navigate');
    await instance.onSubmit(data);
    expect(spy).not.toBeCalledWith('Authenticated');
    expect(spy).toBeCalledWith('Dialog', expect.objectContaining({}));
  });

  it('should navigate to reset password screen', () => {
    const wrapper = shallow(<SignInFormContainer />);
    const instance = wrapper.instance() as SignInFormContainer;
    const spy = jest.spyOn(NavigationService, 'navigate');
    instance.navigateToResetPassword();
    expect(spy).toBeCalledWith('ResetPassword');
  });
});
