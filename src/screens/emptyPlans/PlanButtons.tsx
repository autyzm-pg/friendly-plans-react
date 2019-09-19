import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StyledText } from '../../components';
import { CopyPlanButton } from './CopyPlanButton';
import { CreatePlanButton } from './CreatePlanButton';

export class PlanButtons extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <CreatePlanButton />
        <StyledText>lub</StyledText>
        <CopyPlanButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 200,
  },
});
