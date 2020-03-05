import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { Plan } from 'models';
import { PlanForm } from '../PlanForm';

describe('PlanFormControls', () => {
  const props = {
    navigation: navigationMock,
    onSubmit: jest.fn(),
    plan: new Plan(),
    onValidate: jest.fn(),
    shuffleDisabled: false,
    numberPlan: 1,
  };

  it('renders correctly', () => {
    const planInput = shallow(<PlanForm {...props} />);

    expect(planInput).toMatchSnapshot();
  });
});
