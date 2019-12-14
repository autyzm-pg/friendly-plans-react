import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { palette } from 'styles';

import { i18n } from 'locale';
import { Route } from 'navigation';
import { DashboardBackground } from '../studentPlanList/DashboardBackground';
import { CreateStudentButton } from './CreateStudentButton';

export class CreateFirstStudentScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('studentList:dashboard'),
  };

  handleNavigateToCreateStudent = () => {
    this.props.navigation.navigate(Route.StudentSettings, {
      createStudent: true,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DashboardBackground />
        <CreateStudentButton onPress={this.handleNavigateToCreateStudent} />
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
    flexDirection: 'row',
  },
  text: {
    color: palette.primaryLight,
  },
});
