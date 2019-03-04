import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { CreateStudentButton } from './CreateStudentButton';
import { Sidebar } from './Sidebar';
import { StudentList } from './StudentList';

export class DashboardScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  render() {
    return (
      <View style={styles.container}>
        <Sidebar />
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
