import { shallow } from 'enzyme';
import React from 'react';
import { FixedCreatePlanButton } from '../FixedCreatePlanButton';

describe('FixedCreatePlanButton', () => {
  const props = {
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const createPlanFloatButton = shallow(<FixedCreatePlanButton {...props} />);

    expect(createPlanFloatButton).toMatchSnapshot();
  });
});
