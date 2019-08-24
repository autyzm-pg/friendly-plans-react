import React from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';

import { Card } from 'components';
import { PlanItem } from 'models';
import {palette, typography} from 'styles';
import { PlanItemName } from '../PlanItemName';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
  currentTaskIndex: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  textContainer(): ViewStyle {
    return this.props.planItem.completed ? styles.textContainerCompleted : styles.textContainer;
  }

  nameTextColor() {
    return this.props.planItem.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if (this.props.index === this.props.currentTaskIndex) {
    this.props.planItem.update({
      completed: true,
    });
    }
  };

  render() {
    return (
      <TouchableHighlight 
        underlayColor={palette.underlay}
        style={styles.touchable}
        onPress={this.markItemPlanAsCompleted} >
          <Card style={[this.nameTextColor(), this.textContainer()]} >
          <PlanItemName 
              planItemName={this.props.planItem.name}
              textCase={this.props.textCase}
              textSize={this.props.textSize}
              textColor={this.nameTextColor()} />
          </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    margin: 8,
    borderRadius: 8,
  },
  nameTextColor: {
    color: palette.textBlack,
    flex: 1,
    alignItems: 'center',
  },
  nameTextColorCompleted: {
    color: palette.textWhite,
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: palette.background,
  },
  textContainerCompleted: {
    backgroundColor: palette.primaryDark,
  },
});
