import { shallow } from 'enzyme';
import React from 'react';

import { navigationMock } from 'helpers';
import { EmptyStudentPlansScreen } from '../EmptyStudentPlansScreen';

describe('EmptyStydentPlansScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should navigate to `Dashboard` when `CreatePlanButton` press', () => {
    const emptyStudentPlansScreen = shallow(<EmptyStudentPlansScreen {...props} />);

    const createPlanButton = emptyStudentPlansScreen.find(`CreatePlanButton`);
    createPlanButton.simulate('press');

    expect(props.navigation.navigate).toBeCalledWith('Dashboard');
  });
});
