import { shallow } from 'enzyme';
import React from 'react';

import { StyledText } from '../StyledText';

describe('StyledText', () => {
  const content = 'text content';

  it('should match snapshot', () => {
    const wrapper = shallow(<StyledText>{content}</StyledText>);
    expect(wrapper).toMatchSnapshot();
  });
});
