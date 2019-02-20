import { shallow } from 'enzyme';
import React from 'react';

import { IconButton } from '../IconButton';

describe('IconButton', () => {
  const props = {
    name: 'content-paste',
    onPress: jest.fn(),
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<IconButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onPress on press', () => {
    const wrapper = shallow(<IconButton {...props} />);
    wrapper.simulate('press');
    expect(props.onPress).toBeCalled();
  });
});
