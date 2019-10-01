import { shallow } from 'enzyme';
import React from 'react';
import { FixedCreatePlanSubItemButton } from '../FixedCreatePlanSubItemButton';

describe('FixedCreatePlanSubItemButton', () => {
  it('renders correctly', () => {
    const props = {
      onPress: jest.fn(),
    };
    const createPlanButton = shallow(<FixedCreatePlanSubItemButton {...props} />);

    expect(createPlanButton).toMatchSnapshot();
  });
});
