import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { CreateStudentButton } from './CreateStudentButton';
import { StudentList } from './StudentList';

export class DashboardScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          <StudentList />
          <CreateStudentButton />
        </FullScreenTemplate>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
});
