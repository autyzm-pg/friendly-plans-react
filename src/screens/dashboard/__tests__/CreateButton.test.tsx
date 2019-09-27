import { shallow } from 'enzyme';
import React from 'react';

import { CreateButton } from '../CreateButton';

describe('CreateButton', () => {
  it('renders correctly', () => {
    const createButton = shallow(<CreateButton actionName="create" onPress={jest.fn()} />);

    expect(createButton).toMatchSnapshot();
  });
});
