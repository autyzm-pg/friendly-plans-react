import { shallow } from 'enzyme';
import React from 'react';

import { Button } from '../Button';

describe('Button', () => {
  const props = {
    title: 'blue button',
    backgroundColor: 'blue',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
