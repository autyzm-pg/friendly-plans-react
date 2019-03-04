import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { PlanHeader } from './PlanHeader';

export class UpdatePlanScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  static navigationOptions = ({ navigation }: NavigationInjectedProps) => {
    return {
      title: i18n.t('updatePlan:screenTitle', {
        studentName: navigation.getParam('student').name,
      }),
    };
  };

  render() {
    const student = this.props.navigation.getParam('student');
    const plan = this.props.navigation.getParam('plan');

    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanHeader plan={plan} />
        </Card>
      </FullScreenTemplate>
    );
  }
}
