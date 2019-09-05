import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { PlanElementList } from './PlanElementList';

export class RunPlanListScreen extends React.PureComponent<
  NavigationInjectedProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const itemParent = this.props.navigation.getParam('itemParent');
    const student = this.props.navigation.getParam('student');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
<<<<<<< HEAD:src/screens/runPlan/runPlanList/RunPlanListScreen.tsx
          <PlanItemList
=======
          <PlanElementList
>>>>>>> master:src/screens/runPlan/ListMode/RunPlanListScreen.tsx
            student={student}
            itemParent={itemParent}
            onGoBack={() => null}
          />
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
