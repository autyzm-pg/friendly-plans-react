import React from 'react';
import { StyleSheet, View } from 'react-native';

import { PlanItem } from 'models';
import { palette } from 'styles';
import { PlanItemName } from '../PlanItemName';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
}

export class PlanSlideItem extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container} >
        <PlanItemName 
          planItemName={this.props.planItem.name}
          textCase={this.props.textCase}
          textSize={this.props.textSize}
          textColor={styles.nameTextColor} />
          {this.props.planItem.time!! && <PlanItemTimer itemTime={(this.props.planItem.time!!)} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 0,
  },
  nameTextColor: {
    color: palette.textBlack,
  },
});
