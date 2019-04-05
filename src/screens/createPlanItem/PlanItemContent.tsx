import React from 'react';
import { StyleSheet, View } from 'react-native';

import { PlanItem } from 'models';
import {PlanItemTimer} from "./PlanItemTimer";
import {PlanItemLector} from "./PlanItemLector";

interface Props {
  planItem: PlanItem;
}

export class PlanItemContent extends React.PureComponent<Props> {
  render() {
    const { planItem } = this.props;
    return (
      <View style={styles.container}>
          <View style={styles.leftColumn}>

          </View>
          <View style={styles.rightColumn}>
            <PlanItemTimer planItem={planItem} />
            <PlanItemLector planItem={planItem} />
          </View>
      </View>
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

  }
});
