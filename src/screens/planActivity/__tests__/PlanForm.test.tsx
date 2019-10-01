import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { PlanForm } from '../PlanForm';

describe('PlanFormControls', () => {
  const props = {
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const planInput = shallow(<PlanForm {...props} />);

    expect(planInput).toMatchSnapshot();
  });
});
