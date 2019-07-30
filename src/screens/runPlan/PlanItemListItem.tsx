import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Card, StyledText } from 'components';
import { PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
  index: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  textContainer() {
    return this.props.planItem.completed ? styles.textContainerSelected : styles.textContainer;
  }

  label() {
    return this.props.planItem.completed ? styles.labelSelected : styles.label;
  }

  markItemPlanAsCompleted = () =>
    this.props.planItem.update({
      completed: true,
    });
  
  render() {
    const { planItem } = this.props;
    return (
      <TouchableHighlight 
        underlayColor={palette.underlay}
        style={styles.touchable}
        onPress={this.markItemPlanAsCompleted} >
          <Card style={this.textContainer()} >
            <StyledText style={this.label()}>{planItem.name}</StyledText>
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
  label: {
    color: palette.textBlack,
    ...typography.headline6,
  },
  labelSelected: {
    color: palette.textWhite,
    ...typography.headline6,
  },
  textContainer: {
    backgroundColor: palette.background,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 0,
  },
  textContainerSelected: {
    backgroundColor: palette.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 0,
  },
});
