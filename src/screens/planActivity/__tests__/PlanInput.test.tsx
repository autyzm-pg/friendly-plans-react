import { shallow } from 'enzyme';
import React from 'react';
import { PlanInput } from '../PlanInput';

describe('PlanInput', () => {
  it('renders correctly', () => {
    const planInput = shallow(<PlanInput value="Music" />);

    expect(planInput).toMatchSnapshot();
  });
});
