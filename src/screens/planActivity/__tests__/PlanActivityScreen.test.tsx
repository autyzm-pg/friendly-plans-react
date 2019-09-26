import { shallow } from 'enzyme';
import React from 'react';
import { PlanActivityScreen } from '../PlanActivityScreen';

describe('PlanActivityScreen', () => {
  it('renders correctly', () => {
    const planActivityScreen = shallow(<PlanActivityScreen />);

    expect(planActivityScreen).toMatchSnapshot();
  });
});
