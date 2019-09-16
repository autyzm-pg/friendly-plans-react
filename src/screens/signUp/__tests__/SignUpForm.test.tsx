import { shallow } from 'enzyme';
import React from 'react';

import { NavigationService } from 'services';
import { SignUpForm } from '../SignUpForm';

describe('SignUpForm', () => {
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
    const wrapper = shallow(<SignUpForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to Terms of Use screen', () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const instance = wrapper.instance() as SignUpForm;
    const spy = jest.spyOn(NavigationService, 'navigate').mockImplementation(jest.fn());
    instance.navigateToTermsOfUse();
    expect(spy).toBeCalledWith('TermsOfUse');
  });

  it('should set field value on check terms of use', () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const instance = wrapper.instance() as SignUpForm;
    instance.checkTermsofUse(true);
    expect(props.setFieldValue).toBeCalledWith('termsAccepted', true);
  });
});
