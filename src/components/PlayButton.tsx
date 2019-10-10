import React, { SFC } from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Plan, StudentDisplayOption } from '../models';
import { palette } from '../styles';
import { IconButton } from './IconButton';

interface Props extends NavigationInjectedProps {
  plan?: Plan;
  disabled?: boolean;
  size?: number;
}

const Play: SFC<Props> = ({ plan, disabled, size, navigation }) => {
  const navigateToRunPlan = () => {
    if (!plan) {
      return;
    }

    const student = navigation.getParam('student');

    switch (student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        navigation.navigate('RunPlanSlide', {
          plan,
          student,
        });
        break;
      default:
        navigation.navigate('RunPlanList', {
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

export const PlayButton = withNavigation(Play);
