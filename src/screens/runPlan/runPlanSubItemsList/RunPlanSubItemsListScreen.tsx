import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { PlanSubItemsList } from './PlanItemList';

export class RunPlanSubItemsListScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const planItem = this.props.navigation.getParam('planItem');
    const student = this.props.navigation.getParam('student');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          {/* <PlanSubItemsList 
            student={student}
            planItem={planItem} /> */}
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
