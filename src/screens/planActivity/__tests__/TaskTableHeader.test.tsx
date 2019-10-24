import { shallow } from 'enzyme';
import React from 'react';

import { TaskTableHeader } from '../TaskTableHeader';

describe('TaskTableHeader', () => {
  it('renders correctly', () => {
    const taskTableHeader = shallow(<TaskTableHeader />);

    expect(taskTableHeader).toMatchSnapshot();
  });
});
