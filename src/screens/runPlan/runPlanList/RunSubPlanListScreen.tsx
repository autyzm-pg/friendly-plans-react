import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { PlanItemList } from './PlanItemList';

export class RunSubPlanListScreen extends React.PureComponent<
  NavigationInjectedProps> {
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
            parentItem={plan} />
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
