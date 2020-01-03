import { i18n } from 'locale';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { palette } from 'styles';

import { Route } from 'navigation';
import { StyledText } from '../../components';
import { CopyPlanButton } from './CopyPlanButton';
import { CreatePlanButton } from './CreatePlanButton';
import { DashboardBackground } from './DashboardBackground';

export class EmptyStudentPlans extends React.PureComponent<NavigationInjectedProps> {
  navigateToPlanActivity = () => {
    const student = this.props.navigation.getParam('student');

    this.props.navigation.navigate(Route.PlanActivity, {
      student,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DashboardBackground />
        <CreatePlanButton onPress={this.navigateToPlanActivity} />
        <StyledText style={styles.text}>{i18n.t('planList:conjunction')}</StyledText>
        <CopyPlanButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.backgroundSurface,
  },
  text: {
    color: palette.primaryLight,
  },
});

export default withNavigation(EmptyStudentPlans);
