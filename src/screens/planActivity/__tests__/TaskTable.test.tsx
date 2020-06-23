import { shallow } from 'enzyme';
import React from 'react';

import { PlanItem } from 'models';
import { TaskTable } from '../TaskTable';

const props = {
  planItemList: [new PlanItem()],
  handlePlanListOrderChanged: jest.fn(),
  onEdit: jest.fn(),
};

describe('TaskTable', () => {
  it('renders correctly', () => {
    const taskTable = shallow(<TaskTable {...props} />);

    expect(taskTable).toMatchSnapshot();
  });
});
