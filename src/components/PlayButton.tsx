import React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Plan, StudentDisplayOption } from '../models';
import { palette } from '../styles';
import { IconButton } from './IconButton';

interface Props extends NavigationInjectedProps {
  plan: Plan;
  disabled?: boolean;
  size?: number;
}

export class PlayButton extends React.PureComponent<Props> {
  navigateToRunPlan = () => {
    const student = this.props.navigation.getParam('student');

    switch (student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        this.props.navigation.navigate('RunPlanSlide', {
          plan: this.props.plan,
          student,
        });
        break;
      default:
        this.props.navigation.navigate('RunPlanList', {
          itemParent: this.props.plan,
          student,
        });
    }
  };

  render() {
    const { disabled, size } = this.props;

    return (
      <IconButton
        name="play-circle"
        disabled={disabled}
        size={size}
        color={disabled ? palette.textDisabled : palette.secondary}
        onPress={this.navigateToRunPlan}
      />
    );
  }
}

export default withNavigation(PlayButton);
