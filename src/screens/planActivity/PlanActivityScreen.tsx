import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { FullScreenTemplate } from '../../components';
import { FixedCreatePlanSubItemButton } from './FixedCreatePlanSubItemButton';
import PlanForm from './PlanForm';

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  navigateToCreateSubItem = (itemType: string) => {
    const student = this.props.navigation.getParam('student');
    const plan = this.props.navigation.getParam('plan');
    this.props.navigation.navigate('PlanItemSimpleTask', {
      itemType,
      student,
      plan,
    });
  };

  render() {
    return (
      <>
        <FullScreenTemplate darkBackground>
          <PlanForm />
        </FullScreenTemplate>
        <FixedCreatePlanSubItemButton onPress={this.navigateToCreateSubItem} />
      </>
    );
  }
}
