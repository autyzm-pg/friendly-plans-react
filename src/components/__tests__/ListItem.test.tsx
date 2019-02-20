import { shallow } from 'enzyme';
import React from 'react';

import { ListItem } from '../ListItem';

describe('ListItem', () => {
  const props = {
    title: 'some title',
    onPress: jest.fn(),
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render subtitle if provided', () => {
    const subtitle = 'some additional smaller text';
    const wrapper = shallow(<ListItem {...props} subtitle={subtitle} />);
    expect(wrapper.find(`StyledText[children="${subtitle}"]`)).toExist();
  });

  it('should render icon if provided', () => {
    const icon = { name: 'logout' };
    const wrapper = shallow(<ListItem {...props} icon={icon} />);
    expect(wrapper.find('Icon')).toExist();
  });
});
