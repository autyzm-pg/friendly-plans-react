import { shallow } from 'enzyme';
import React from 'react';
import { PlanNameInput } from '../PlanNameInput';

describe('PlanNameInput', () => {
  it('renders correctly', () => {
    const planNameInput = shallow(<PlanNameInput value="Music" />);

    expect(planNameInput).toMatchSnapshot();
  });
});
