import React from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';

import { NavigationService } from '../../../services';
import { Card } from 'components';
import { Plan, PlanItem, PlanSubItem, Student } from 'models';
import { palette } from 'styles';
import { PlanItemName } from '../PlanItemName';

interface Props {
  student: Student;
  itemParent: PlanItem | Plan;
  item: PlanItem | PlanSubItem;
  index: number;
  currentTaskIndex: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  textContainer(): ViewStyle {
    return this.props.item.completed ? styles.textContainerCompleted : styles.textContainer;
  }

  nameTextColor(): ViewStyle {
    return this.props.item.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if (this.props.index === this.props.currentTaskIndex) {
      if(this.props.item instanceof PlanItem) {
        this.props.item.update({completed: true,});
      } else {
        this.props.itemParent.updatePlanSubItem(this.props.item.id,{completed: true,});
      }
    }
  }

  navigateToRunPlanSubItemsList= () => {
    NavigationService.navigate('RunSubPlanList', {
      plan: this.props.item,
      student: this.props.student,
    });
  }

  handlePress = () => {
    if (this.props.item.type === 'complexTask' && this.props.item instanceof PlanItem) {
      return this.navigateToRunPlanSubItemsList;
    } else {
      return this.markItemPlanAsCompleted;
    }
  }

  render() {
    return (
      <TouchableHighlight 
        underlayColor={palette.underlay}
        style={styles.touchable}
        onPress={this.handlePress()} >
          <Card style={[this.nameTextColor(), this.textContainer()]} >
          <PlanItemName 
              planItemName={this.props.item.name}
              textCase={this.props.student.textCase}
              textSize={this.props.student.textSize}
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