import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { dimensions, getElevation, palette } from 'styles';
import { FullScreenTemplate } from '../../components';
import { FixedCreatePlanSubItemButton } from './FixedCreatePlanSubItemButton';
import { PlanInput } from './PlanInput';
import { TaskButtons } from './TaskButtons';

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  render() {
    const { id } = this.props.navigation.getParam('student');

    return (
      <FullScreenTemplate darkBackground>
        <View style={styles.container}>
          <PlanInput studentId={id} />
          <TaskButtons />
        </View>
        <FixedCreatePlanSubItemButton />
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    backgroundColor: palette.background,
    ...getElevation(5),
  },
});
