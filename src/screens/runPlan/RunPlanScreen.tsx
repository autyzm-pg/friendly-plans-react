import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate, StyledText } from 'components';
import { palette } from 'styles';
import { PlanItemList } from './PlanItemList';

export class RunPlanScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const plan = this.props.navigation.getParam('plan');
    const student = this.props.navigation.getParam('student');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          <PlanItemList 
            student={student}
            plan={plan} />
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
