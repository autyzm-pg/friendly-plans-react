import { shallow } from 'enzyme';
import React from 'react';

import { InputItem } from '../InputItem';

describe('InputItem', () => {
  const props = {
    label: 'input label',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<InputItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with secure text entry', () => {
    const wrapper = shallow(<InputItem {...props} secureTextEntry />);
    expect(wrapper.find('IconButton')).toExist();
  });

  it('should toggle secure text visibility', () => {
    const wrapper = shallow(<InputItem {...props} secureTextEntry />);
    const instance = wrapper.instance() as InputItem;
    expect(instance.state.isSecureTextVisible).toBe(false);
    instance.toggleSecureTextVisibility();
    expect(instance.state.isSecureTextVisible).toBe(true);
  });

  it('should render with error visible if error present and touched', () => {
    const error = 'oh my';
    const wrapper = shallow(<InputItem {...props} error={error} touched />);
    expect(wrapper.find(`StyledText[children="${error}"]`)).toExist();
  });
});
