import React from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';

import { Card } from 'components';
import { Plan, PlanItem, PlanItemType, PlanSubItem, Student } from 'models';
import { palette } from 'styles';
import { NavigationService } from '../../../services';
import { PlanItemName } from '../PlanItemName';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  student: Student;
  itemParent: PlanItem | Plan;
  item: PlanItem | PlanSubItem;
  index: number;
  currentTaskIndex: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  container(): ViewStyle {
    return this.props.item.completed ? styles.containerCompleted : styles.container;
  }

  nameTextColor(): ViewStyle {
    return this.props.item.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if (this.props.index === this.props.currentTaskIndex) {
      if(this.isItemParentPlan()) {
        this.props.item.update({completed: true,});
      } else {
        this.props.itemParent.updatePlanSubItem(this.props.item.id, {completed: true,});
      }
    }
  }

  isItemParentPlan() {
    return (this.props.itemParent instanceof Plan);
  }

  navigateToRunPlanSubItemsList= () => {
    NavigationService.navigate('RunSubPlanList', {
      itemParent: this.props.item,
      student: this.props.student,
      onGoBack: () => this.props.item.update({completed: true,}),
    });
  };

  handlePress = () => {
    if (this.props.item.type === PlanItemType.ComplexTask && this.isItemParentPlan()) {
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
          <Card style={[this.nameTextColor(), this.container()]} >
          <PlanItemName 
              planItemName={this.props.item.name}
              textCase={this.props.student.textCase}
              textSize={this.props.student.textSize}
              textColor={this.nameTextColor()}
          />
          {(!!this.props.item.time && this.props.index === this.props.currentTaskIndex)
              ? <PlanItemTimer itemTime={this.props.item.time} /> : null}
          </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    margin: 8,
    borderRadius: 8,
    flex: 1,
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
  container: {
    backgroundColor: palette.background,
    flex: 6,
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 0,
  },
  containerCompleted: {
    backgroundColor: palette.primaryDark,
    flex: 6,
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 0,
  },
});