import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import EmptyStudentPlans from '../EmptyStudentPlans';

describe('EmptyStydentPlans', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should navigate to `Dashboard` when `CreatePlanButton` press', () => {
    const emptyStudentPlans = shallow(<EmptyStudentPlans {...props} />);

    const createPlanButton = emptyStudentPlans.find(`CreatePlanButton`);
    createPlanButton.simulate('press');

    expect(props.navigation.navigate).toBeCalledWith('Dashboard');
  });
});
