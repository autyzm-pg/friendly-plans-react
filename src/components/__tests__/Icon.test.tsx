import { shallow } from 'enzyme';
import React from 'react';

import { Icon } from '../Icon';

describe('Icon', () => {
  const props = {
    name: 'content-paste',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
