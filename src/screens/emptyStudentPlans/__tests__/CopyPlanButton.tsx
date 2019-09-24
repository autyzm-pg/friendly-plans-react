import { shallow } from 'enzyme';
import React from 'react';
import { CopyPlanButton } from '../CopyPlanButton';

describe('CopyPlanButton', () => {
  it('renders correctly', () => {
    const copyPlanButton = shallow(<CopyPlanButton />);

    expect(copyPlanButton).toMatchSnapshot();
  });
});
