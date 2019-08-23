import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { palette } from 'styles';
import { RunPlanSubItemList } from './RunPlanSubItemList';

export class RunPlanSubItemListScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const planItem = this.props.navigation.getParam('planItem');
    const textSize = this.props.navigation.getParam('textSize');
    const textCase = this.props.navigation.getParam('textCase');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          <RunPlanSubItemList 
            planItem={planItem}
            textSize={textSize}
            textCase={textCase} />
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
