import React from 'react';
import {StyleSheet, TouchableHighlight, View, ViewStyle} from 'react-native';

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

  navigateToRunPlanSubItemsList = () => {
    NavigationService.navigate('RunSubPlanList', {
      itemParent: this.props.item,
      student: this.props.student,
      onGoBack: () => this.props.item.update({completed: true,}),
    });
  };

  handlePress = () => {
    if (this.props.item.type === PlanItemType.ComplexTask && this.isItemParentPlan()) {
      if(this.props.item.completed === false) {
        return this.navigateToRunPlanSubItemsList;
      }
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
          <Card style={this.container()} >
            <View style={this.container()}>
              <PlanItemName 
                  planItemName={this.props.item.name}
                  textCase={this.props.student.textCase}
                  textSize={this.props.student.textSize}
                  textColor={this.nameTextColor()} />
              {(!!this.props.item.time && this.props.index === this.props.currentTaskIndex)
                ? <PlanItemTimer itemTime={this.props.item.time} /> : null}
            </View>
          </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    margin: 8,
    borderRadius: 8,
    flex: 6,
    flexDirection: 'row',
  },
  nameTextColor: {
    flex: 5,
    color: palette.textBlack,
    textAlignVertical: 'center',
  },
  nameTextColorCompleted: {
    flex: 5,
    color: palette.textWhite,
    textAlignVertical: 'center',
  },
  card: {
    flex: 1,
    margin: 0,
  },
  container: {
    backgroundColor: palette.background,
    flex: 6,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  containerCompleted: {
    backgroundColor: palette.primaryDark,
    flex: 6,
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 0,
  },
});