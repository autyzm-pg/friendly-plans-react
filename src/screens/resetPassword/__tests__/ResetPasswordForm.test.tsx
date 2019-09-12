import { shallow } from 'enzyme';
import React from 'react';
import { Alert } from 'react-native';
import firebase from 'react-native-firebase';

import { i18n } from 'locale';
import { NavigationService } from 'services';
import { ResetPasswordForm } from '../ResetPasswordForm';

describe('ResetPasswordForm', () => {
  const formProps = {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    values: {
      email: 'email@domain.com',
    },
    errors: {
      email: null,
    },
    touched: {
      email: true,
    },
    handleSubmit: jest.fn(),
  } as any;

  it('should match snapshot', () => {
    const wrapper = shallow(<ResetPasswordForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('form should match snapshot', () => {
    const wrapper = shallow(<ResetPasswordForm />);
    const instance = wrapper.instance() as ResetPasswordForm;
    const form = shallow(instance.renderForm(formProps));
    expect(form).toMatchSnapshot();
  });

  it('should show success message and navigate to sign in screen on successful password reset', async () => {
    const wrapper = shallow(<ResetPasswordForm />);
    const instance = wrapper.instance() as ResetPasswordForm;
    const navigationSpy = jest.spyOn(NavigationService, 'navigate').mockImplementationOnce(jest.fn());
    const alertSpy = jest.spyOn(Alert, 'alert');
    await instance.onSubmit(formProps.values);
    expect(navigationSpy).toBeCalledWith('SignIn');
    expect(alertSpy).toBeCalledWith(i18n.t('common:success'), i18n.t('resetPassword:resetPasswordSuccess'));
  });

  it('should handle user not found errors', async () => {
    const wrapper = shallow(<ResetPasswordForm />);
    const instance = wrapper.instance() as ResetPasswordForm;
    const spy = jest.spyOn(Alert, 'alert');
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      sendPasswordResetEmail: jest.fn(() => Promise.reject({ code: 'auth/user-not-found' })),
    }));
    await instance.onSubmit(formProps.values);
    expect(spy).toBeCalledWith(i18n.t('common:error'), i18n.t('resetPassword:userNotFound'));
  });

  it('should handle unknown errors', async () => {
    const wrapper = shallow(<ResetPasswordForm />);
    const instance = wrapper.instance() as ResetPasswordForm;
    const spy = jest.spyOn(Alert, 'alert');
    // @ts-ignore
    firebase.auth = jest.fn().mockImplementationOnce(() => ({
      sendPasswordResetEmail: jest.fn(() => Promise.reject({ code: 'unknown code' })),
    }));
    await instance.onSubmit(formProps.values);
    expect(spy).toBeCalledWith(i18n.t('common:error'), i18n.t('common:unknownError'));
  });
});
