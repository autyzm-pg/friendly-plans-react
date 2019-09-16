import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { StudentDisplayOption } from 'models';
import { CreatePlanItemButton } from './CreatePlanItemButton';
import { PlanHeader } from './PlanHeader';
import { PlanItemList } from './PlanItemList';

export class UpdatePlanScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }: NavigationInjectedProps) => {
    return {
      title: i18n.t('updatePlan:screenTitle', {
        studentName: navigation.getParam('student').name,
      }),
    };
  };

  plan = this.props.navigation.getParam('plan');
  student = this.props.navigation.getParam('student');

  navigateToRunPlan = () => {
    switch (this.student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        this.props.navigation.navigate('RunPlanSlide', {
          plan: this.plan,
          student: this.student,
        });
        break;
      default:
        this.props.navigation.navigate('RunPlanList', {
          student: this.student,
          itemParent: this.plan,
        });
    }
  };

  render() {
    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanHeader plan={this.plan} onRunPlan={this.navigateToRunPlan} />
          <PlanItemList plan={this.plan} />
        </Card>
        <CreatePlanItemButton plan={this.plan} />
      </FullScreenTemplate>
    );
  }
}
