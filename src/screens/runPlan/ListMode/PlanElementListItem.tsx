import React from 'react';
import { StyleSheet, TouchableHighlight, View, ViewStyle } from 'react-native';

import { Card } from 'components';
import { Plan, PlanItem, PlanItemType, Student } from 'models';
import { palette } from 'styles';
import { PlanElement } from '../../../models/PlanElement';
import { NavigationService } from '../../../services';
import { PlanItemName } from '../PlanItemName';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  student: Student;
  itemParent: PlanItem | Plan;
  item: PlanElement;
  index: number;
  currentTaskIndex: number;
}

export class PlanElementListItem extends React.PureComponent<Props> {
  container(): ViewStyle {
    return this.props.item.completed ? styles.containerCompleted : styles.container;
  }

  nameTextColor(): ViewStyle {
    return this.props.item.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if (this.props.index === this.props.currentTaskIndex) {
      this.props.item.complete();
    }
  };

  navigateToRunPlanSubItemsList = () => {
    NavigationService.navigate('RunSubPlanList', {
      itemParent: this.props.item,
      student: this.props.student,
      onGoBack: () => {
        this.props.item.complete();
        NavigationService.goBack();
      },
    });
  };

  handlePress = () => {
    if (this.props.item.type === PlanItemType.ComplexTask) {
      return this.navigateToRunPlanSubItemsList;
    } else {
      return this.markItemPlanAsCompleted;
    }
  };

  isTimerAvailableForElement = (): boolean =>
    !!this.props.item.time && this.props.index === this.props.currentTaskIndex;

  render() {
    return (
      <TouchableHighlight underlayColor={palette.underlay} style={styles.touchable} onPress={this.handlePress()}>
        <Card style={this.container()}>
          <View style={this.container()}>
            <PlanItemName
              planItemName={this.props.item.name}
              isUpperCase={this.props.student.isUpperCase}
              textSize={this.props.student.textSize}
              textColor={this.nameTextColor()}
            />
            {this.isTimerAvailableForElement() ? <PlanItemTimer itemTime={this.props.item.time} /> : null}
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
