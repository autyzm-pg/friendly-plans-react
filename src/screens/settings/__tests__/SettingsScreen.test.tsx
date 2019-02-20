import { shallow } from 'enzyme';
import React from 'react';

import { SettingsScreen } from '../SettingsScreen';

describe('SettingsScreen', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SettingsScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
