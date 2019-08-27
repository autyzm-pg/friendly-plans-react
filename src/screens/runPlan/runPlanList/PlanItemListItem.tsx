import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

import { Card } from 'components';
import { PlanItem } from 'models';
import {palette, typography} from 'styles';
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

  container() {
    return this.props.planItem.completed ? styles.containerCompleted : styles.container;
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
          <Card style={this.container()} >
            <View>
              <PlanItemName 
                  planItemName={this.props.planItem.name}
                  textCase={this.props.textCase}
                  textSize={this.props.textSize}
                  textColor={this.nameTextColor()} />
              {(this.props.planItem.time!! && this.props.index === this.props.currentTaskIndex)
                ? <PlanItemTimer itemTime={this.props.planItem.time} /> : null}
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
    flex: 1,
  },
  nameTextColor: {
    color: palette.textBlack,
  },
  nameTextColorCompleted: {
    color: palette.textWhite,
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
