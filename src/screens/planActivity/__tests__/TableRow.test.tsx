import { shallow } from 'enzyme';
import React from 'react';

import { PlanItem } from 'models';
import { TableRow } from '../TableRow';

describe('TableRow', () => {
  it('renders correctly', () => {
    const tableRow = shallow(<TableRow planItem={new PlanItem()} rowNumber={1} />);

    expect(tableRow).toMatchSnapshot();
  });
});
