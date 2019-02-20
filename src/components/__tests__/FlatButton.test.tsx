import { shallow } from 'enzyme';
import React from 'react';

import { FlatButton } from '../FlatButton';

describe('FlatButton', () => {
  const props = {
    title: 'flat button',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<FlatButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
