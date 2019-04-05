import React from 'react';
import {StyleSheet, View} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { PlanItemHeader } from "./PlanItemHeader";
import { PlanItemImagePicker } from './PlanItemImagePicker';
import {PlanItemTimer} from "./PlanItemTimer";
import {PlanItemLector} from "./PlanItemLector";
import { PlanItem } from "../../models";

interface State {
  source: any;
}

export class CreatePlanItemScreen extends React.PureComponent<
  NavigationInjectedProps, State
> {
  state = {
    source: null,
  };

  onImageChange = (source: any) => {
    this.setState({ source });
  };

  render() {
    const { source } = this.state;

    const plan = this.props.navigation.getParam('plan');
    const planItem = new PlanItem;
    return (
        <FullScreenTemplate padded darkBackground>
          <Card>
            <PlanItemHeader planItem={planItem} />

            <View style={styles.container}>
              <View style={styles.leftColumn}>
                <PlanItemImagePicker source={source} onChange={this.onImageChange} />
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
  }
});
