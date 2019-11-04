import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { palette } from 'styles';

import { CreateStudentButton } from './CreateStudentButton';

import { DashboardBackground } from '../studentPlanList/DashboardBackground';

import { i18n } from 'locale';
import { Student } from 'models';

class StudentsDasboard extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('studentsList:dashboard'),
  };

  handleStudentCreate = () => {
    Student.create().then(() => {
      this.props.navigation.navigate('Dashboard');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DashboardBackground />
        <CreateStudentButton onPress={this.handleStudentCreate} />
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

export default withNavigation(StudentsDasboard);
