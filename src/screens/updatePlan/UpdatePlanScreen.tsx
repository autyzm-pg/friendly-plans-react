import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { CreatePlanItemButton } from './CreatePlanItemButton';
import { PlanHeader } from './PlanHeader';
import { PlanItemList } from './PlanItemList';

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
    const plan = this.props.navigation.getParam('plan');

    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanHeader plan={plan} />
          <PlanItemList plan={plan} />
        </Card>
        <CreatePlanItemButton plan={plan} />
      </FullScreenTemplate>
    );
  }
}
