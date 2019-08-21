import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Card } from 'components';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { PlanItemName } from '../PlanItemName';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
  currentTaskIndex: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  textContainer() {
    return this.props.planItem.completed ? styles.textContainerCompleted : styles.textContainer;
  }

  nameTextColor() {
    return this.props.planItem.completed ? styles.nameTextColorCompleted : styles.nameTextColor;
  }

  markItemPlanAsCompleted = () => {
    if(this.props.index == this.props.currentTaskIndex)
    this.props.planItem.update({
      completed: true,
    });
  }

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
            {this.props.planItem.time!! && <PlanItemTimer itemTime={(this.props.planItem.time!!)} />}
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
  },
  nameTextColorCompleted: {
    color: palette.textWhite,
  },
  textContainer: {
    backgroundColor: palette.background,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    margin: 0,
  },
  textContainerCompleted: {
    backgroundColor: palette.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 0,
  },
});
