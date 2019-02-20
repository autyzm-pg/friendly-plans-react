import { shallow } from 'enzyme';
import React from 'react';

import { SignInForm } from '../SignInForm';

describe('SignInForm', () => {
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
    const wrapper = shallow(<SignInForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
