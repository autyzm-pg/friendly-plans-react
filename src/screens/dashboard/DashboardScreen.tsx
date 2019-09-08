import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';
import { CreateStudentButton } from './CreateStudentButton';
import { StudentList } from './StudentList';

export class DashboardScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  render() {
    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          <StudentList />
        </FullScreenTemplate>
        <CreateStudentButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: palette.backgroundTinted,
  },
});
