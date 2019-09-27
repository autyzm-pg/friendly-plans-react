import { shallow } from 'enzyme';
import React from 'react';
import { PlanInput } from '../PlanInput';

describe('PlanInput', () => {
  it('renders correctly', () => {
    const planInput = shallow(<PlanInput studentId="123" />);

    expect(planInput).toMatchSnapshot();
  });
});
