import { shallow } from 'enzyme';
import React from 'react';
import { FixedCreatePlanItemButton } from '../FixedCreatePlanItemButton';

describe('FixedCreatePlanItemButton', () => {
  it('renders correctly', () => {
    const createPlanButton = shallow(<FixedCreatePlanItemButton onPress={jest.fn()} />);

    expect(createPlanButton).toMatchSnapshot();
  });
});
