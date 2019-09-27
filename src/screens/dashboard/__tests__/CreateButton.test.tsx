import { shallow } from 'enzyme';
import React from 'react';

import { CreatePlanButton } from '../CreatePlanButton';

describe('CreateButton', () => {
  it('renders correctly', () => {
    const createButton = shallow(<CreatePlanButton onPress={jest.fn()} />);

    expect(createButton).toMatchSnapshot();
  });
});
