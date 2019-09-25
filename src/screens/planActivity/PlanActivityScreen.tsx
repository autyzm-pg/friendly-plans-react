import React from 'react';
import { StyleSheet, View } from 'react-native';

import { palette } from 'styles';
import { FullScreenTemplate } from '../../components';
import { PlanInput } from './PlanInput';
import { TaskButtons } from './TaskButtons';

export class PlanActivityScreen extends React.PureComponent {
  render() {
    return (
      <FullScreenTemplate darkBackground>
        <View style={styles.container}>
          <PlanInput />
          <TaskButtons />
        </View>
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
    paddingLeft: 32,
    paddingRight: 24,
    backgroundColor: palette.background,
    elevation: 5,
  },
});
