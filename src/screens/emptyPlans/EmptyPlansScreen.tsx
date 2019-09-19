import { i18n } from 'locale';
import React from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { CopyPlanButton } from './CopyPlanButton';
import { CreatePlanButton } from './CreatePlanButton';
import { PlanButtons } from './PlanButtons';

export class EmptyPlansScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  render() {
    return <View />;
  }
}
