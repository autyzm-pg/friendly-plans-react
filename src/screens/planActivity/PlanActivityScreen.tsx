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

  render() {
    return (
      <>
        <FullScreenTemplate darkBackground>
          <PlanForm />
        </FullScreenTemplate>
        <FixedCreatePlanSubItemButton />
      </>
    );
  }
}
