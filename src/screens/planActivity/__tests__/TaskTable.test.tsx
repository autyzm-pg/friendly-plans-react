import { shallow } from 'enzyme';
import React from 'react';

import { PlanItem } from 'models';
import { TaskTable } from '../TaskTable';

describe('TaskTable', () => {
  it('renders correctly', () => {
    const taskTable = shallow(<TaskTable rowList={[new PlanItem()]} />);

    expect(taskTable).toMatchSnapshot();
  });
});
