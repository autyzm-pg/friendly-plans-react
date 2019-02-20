import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { FullScreenTemplate } from '../FullScreenTemplate';

describe('FullScreenTemplate', () => {
  const props = {
    padded: true,
    children: <Text>Child text</Text>,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<FullScreenTemplate {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content', () => {
    const content = <Text>some content</Text>;
    const wrapper = shallow(<FullScreenTemplate>{content}</FullScreenTemplate>);
    expect(wrapper.contains(content)).toBe(true);
  });
});
