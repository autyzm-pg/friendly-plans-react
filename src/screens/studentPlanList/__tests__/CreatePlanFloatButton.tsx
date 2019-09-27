import { shallow } from 'enzyme';
import React from 'react';
import { CreatePlanFloatButton } from '../CreatePlanFloatButton';

describe('CreatePlanFloatButton', () => {
  const props = {
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const createPlanFloatButton = shallow(<CreatePlanFloatButton {...props} />);

    expect(createPlanFloatButton).toMatchSnapshot();
  });
});
