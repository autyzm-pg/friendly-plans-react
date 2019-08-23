import React from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';

import { Card } from 'components';
import { PlanSubItem, PlanItem } from 'models';
import { palette } from 'styles';
import { PlanItemName } from '../PlanItemName';

interface Props {
  subItem: PlanSubItem;
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
  currentTaskIndex: number;
}

export class PlanSubItemListItem extends React.PureComponent<Props> {
  textContainer(): ViewStyle {
    return this.props.subItem.completed ? styles.textContainerCompleted : styles.textContainer;
  }

  nameTextColor(): ViewStyle {
    return this.props.subItem.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if (this.props.index === this.props.currentTaskIndex) {
      this.props.planItem.updatePlanSubItem(this.props.subItem.id,{completed: true,});
    }
  }

  handlePress = () => {
    return this.markItemPlanAsCompleted;
  }

  render() {
    return (
      <TouchableHighlight 
        underlayColor={palette.underlay}
        style={styles.touchable}
        onPress={this.handlePress()} >
          <Card style={[this.nameTextColor(), this.textContainer()]} >
          <PlanItemName 
              planItemName={this.props.subItem.name}
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
    margin: 0,
  },
  textContainerCompleted: {
    backgroundColor: palette.primaryDark,
    margin: 0,
  },
});