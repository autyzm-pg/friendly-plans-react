import React, { SFC } from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Plan, StudentDisplayOption } from 'models';
import { Route } from 'navigation';
import { palette } from 'styles';
import { IconButton } from './IconButton';

interface Props extends NavigationInjectedProps {
  plan?: Plan;
  disabled?: boolean;
  size?: number;
}

export const PlayButton: SFC<Props> = ({ plan, disabled, size, navigation }) => {
  const navigateToRunPlan = () => {
    if (!plan) {
      return;
    }

    const student = navigation.getParam('student');

    switch (student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        navigation.navigate(Route.RunPlanSlide, {
          plan,
          student,
        });
        break;
      default:
        navigation.navigate(Route.RunPlanList, {
          itemParent: plan,
          student,
        });
    }
  };

  return (
    <IconButton
      name="play-circle"
      disabled={disabled}
      size={size}
      color={disabled ? palette.textDisabled : palette.secondary}
      onPress={navigateToRunPlan}
    />
  );
};

export default withNavigation(PlayButton);
