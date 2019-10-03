import { shallow } from 'enzyme';
import React from 'react';
import { FixedCreatePlanSubItemButton } from '../FixedCreatePlanSubItemButton';

describe('FixedCreatePlanSubItemButton', () => {
  it('renders correctly', () => {
    const createPlanButton = shallow(<FixedCreatePlanSubItemButton />);

    expect(createPlanButton).toMatchSnapshot();
  });
});
