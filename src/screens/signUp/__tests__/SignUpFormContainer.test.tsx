import { shallow } from 'enzyme';
import React from 'react';
import firebase from 'react-native-firebase';

import { NavigationService } from 'services';
import { SignUpFormContainer } from '../SignUpFormContainer';

describe('SignUpFormContainer', () => {
  const props = {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    values: {
      email: 'email@domain.com',
      password: 'topsecretpassword',
      termsAccepted: true,
    },
    errors: {
      email: '',
      password: '',
      termsAccepted: '',
    },
    touched: {
      email: true,
      password: true,
      termsAccepted: true,
    },
    handleSubmit: jest.fn(),
    setFieldValue: jest.fn(),
  } as any;

  it('should match snapshot', () => {
    const wrapper = shallow(<SignUpFormContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form correctly', () => {
    const wrapper = shallow(<SignUpFormContainer />);
    const instance = wrapper.instance() as SignUpFormContainer;
    const form = shallow(instance.renderForm(props));
    expect(form).toMatchSnapshot();
  });

  it('should navigate to authenticated on successful submit', async () => {
    const wrapper = shallow(<SignUpFormContainer />);
    const instance = wrapper.instance() as SignUpFormContainer;
    const data = {
      email: 'email@domain.com',
      password: 'topsecretpa$$w0rd',
      name: 'test name',
      imageUrl: '',
    };
    const spy = jest.spyOn(NavigationService, 'navigate').mockImplementation(jest.fn());
    await instance.onSubmit(data);
    expect(spy).toBeCalledWith('Authenticated');
    jest.resetAllMocks();
  });

  it('should not navigate to authenticated on failed submit', async () => {
    const wrapper = shallow(<SignUpFormContainer />);
    const instance = wrapper.instance() as SignUpFormContainer;
    const data = {
      email: 'email@domain.com',
      password: 'topsecretpa$$w0rd',
      name: 'test name',
      imageUrl: '',
    };
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      createUserWithEmailAndPassword: jest.fn(() => Promise.reject('error')),
    }));
    const spy = jest.spyOn(NavigationService, 'navigate');
    await instance.onSubmit(data);
    expect(spy).not.toBeCalledWith('Authenticated');
    expect(spy).toBeCalledWith('Dialog', expect.objectContaining({}));
  });
});
