import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { PlanElementList } from './PlanElementList';

export class RunSubPlanListScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const itemParent = this.props.navigation.getParam('itemParent');
    const student = this.props.navigation.getParam('student');
    const onGoBack = this.props.navigation.getParam('onGoBack');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          <PlanElementList
            student={student}
            itemParent={itemParent}
            onGoBack={onGoBack}
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
