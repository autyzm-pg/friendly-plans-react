import { shallow } from 'enzyme';
import React from 'react';

import { ContentListScreen } from '../ContentListScreen';

describe('ContentListScreen', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ContentListScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
