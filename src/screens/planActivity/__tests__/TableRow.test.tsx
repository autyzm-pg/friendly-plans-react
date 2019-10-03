import { shallow } from 'enzyme';
import React from 'react';

import { TableRow } from '../TableRow';

describe('TableRow', () => {
  it('renders correctly', () => {
    const tableRow = shallow(<TableRow rowNumber={1} />);

    expect(tableRow).toMatchSnapshot();
  });
});
