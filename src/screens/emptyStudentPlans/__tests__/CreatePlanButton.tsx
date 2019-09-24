import { shallow } from 'enzyme';
import React from 'react';
import { CreatePlanButton } from '../CreatePlanButton';

describe('CreatePlanButton', () => {
  const props = {
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const copyPlanButton = shallow(<CreatePlanButton {...props} />);

    expect(copyPlanButton).toMatchSnapshot();
  });
});
