import { shallow } from 'enzyme';
import React from 'react';

import { PlanItem } from 'models';
import { TableRow } from '../TableRow';

const props = {
  planItem: new PlanItem(),
  rowNumber: 1,
  drag: jest.fn(),
  onEdit: jest.fn(),
};

describe('TableRow', () => {
  it('renders correctly', () => {
    const tableRow = shallow(<TableRow {...props} />);

    expect(tableRow).toMatchSnapshot();
  });
});
