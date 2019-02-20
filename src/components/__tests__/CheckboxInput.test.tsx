import { shallow } from 'enzyme';
import React from 'react';

import { CheckboxInput, icons } from '../CheckboxInput';

describe('Button', () => {
  const props = {
    checked: true,
    onPress: jest.fn(),
    title: 'title',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<CheckboxInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle checked on press', () => {
    const wrapper = shallow(<CheckboxInput {...props} />);
    const instance = wrapper.instance() as CheckboxInput;
    instance.onPress();
    expect(props.onPress).toBeCalledWith(!props.checked);
  });

  it('should render with unchecked icon if unchecked', () => {
    const wrapper = shallow(<CheckboxInput {...props} checked={false} />);
    expect(wrapper.find(`IconButton[name="${icons.unchecked}"]`)).toExist();
  });

  it('should render with error visible if error present', () => {
    const error = 'oh my';
    const wrapper = shallow(<CheckboxInput {...props} error={error} />);
    expect(wrapper.find(`StyledText[children="${error}"]`)).toExist();
  });
});
