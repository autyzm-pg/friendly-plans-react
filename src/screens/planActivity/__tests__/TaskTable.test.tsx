import { shallow } from 'enzyme';
import React from 'react';

import { TaskTable } from '../TaskTable';

describe('TaskTable', () => {
  it('renders correctly', () => {
    const taskTable = shallow(<TaskTable rowList={[1]} />);

    expect(taskTable).toMatchSnapshot();
  });
});
