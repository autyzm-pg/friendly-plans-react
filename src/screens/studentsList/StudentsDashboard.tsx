import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { palette } from 'styles';

import { i18n } from 'locale';
import { DashboardBackground } from '../studentPlanList/DashboardBackground';
import { CreateStudentButton } from './CreateStudentButton';

class StudentsDasboard extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('studentsList:dashboard'),
  };

  handleStudentCreate = () => {
    this.props.navigation.navigate('StudentSettings', {
      createStudent: true,
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
