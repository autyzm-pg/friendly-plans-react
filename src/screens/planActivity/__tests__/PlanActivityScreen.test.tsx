import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { PlanActivityScreen } from '../PlanActivityScreen';

describe('PlanActivityScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const planActivityScreen = shallow(<PlanActivityScreen {...props} />);

    expect(planActivityScreen).toMatchSnapshot();
  });
});
