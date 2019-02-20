import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { DialogScreen } from '../DialogScreen';

describe('DialogScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<DialogScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not change state if title is already present', () => {
    const wrapper = shallow(<DialogScreen {...props} />);
    const instance = wrapper.instance() as DialogScreen;
    expect(instance.state.title).toBe('title');
    wrapper.setProps({});
    expect(instance.state.title).toBe('title');
  });
});
