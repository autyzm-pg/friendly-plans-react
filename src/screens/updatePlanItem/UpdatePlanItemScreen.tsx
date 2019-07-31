import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { PlanItemHeader } from './PlanItemHeader';
import { PlanItemImagePicker } from './PlanItemImagePicker';
import { PlanItemLector } from './PlanItemLector';
import { PlanItemTimer } from './PlanItemTimer';

interface State {
  source: any;
}

export class UpdatePlanItemScreen extends React.PureComponent<
  NavigationInjectedProps,
  State
> {
  state = {
    source: null,
  };

  onImageChange = (source: any) => {
    this.setState({ source });
  };

  render() {
    const { source } = this.state;

    const planItem = this.props.navigation.getParam('planItem');
    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanItemHeader planItem={planItem} />

          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <PlanItemImagePicker
                source={source}
                onChange={this.onImageChange}
              />
            </View>
            <View style={styles.rightColumn}>
              <PlanItemTimer planItem={planItem} />
              <PlanItemLector planItem={planItem} />
            </View>
          </View>
        </Card>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flexGrow: 2,
  },
  rightColumn: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
