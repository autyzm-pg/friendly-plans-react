import { shallow } from 'enzyme';
import React from 'react';
import { PlanFormControls } from '../PlanFormControls';

describe('PlanFormControls', () => {
  const props = {
    handleChange: jest.fn(),
    values: {
      planInput: 'Music',
    },
    submitForm: jest.fn(),
    isSubmitting: false,
  } as any;

  it('renders correctly', () => {
    const planInput = shallow(<PlanFormControls {...props} />);

    expect(planInput).toMatchSnapshot();
  });
});
