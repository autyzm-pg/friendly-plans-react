import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Card, StyledText } from 'components';
import { Student, PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
  currentTaskIndex: number;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  state = { 
    planItemName: this.props.textCase=='standardcase' 
    ? this.props.planItem.name
    : this.props.planItem.name.toUpperCase()
  }
  
  textContainer() {
    return this.props.planItem.completed ? styles.textContainerCompleted : styles.textContainer;
  }

  labelColor() {
    return this.props.planItem.completed ? styles.labelColorCompleted : styles.labelColor;
  }

  labelTextSize() {
    switch(this.props.textSize){
      case 'xl': return styles.labelTextSizeXL;
      case 'l': return styles.labelTextSizeL;
      case 'm': return styles.labelTextSizeM;
      default: return styles.labelTextSizeS;
    }
  }

  markItemPlanAsCompleted = () =>{
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
          <Card style={this.textContainer()} >
            <StyledText style={[this.labelColor(), this.labelTextSize()]}>{this.state.planItemName}</StyledText>
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
  labelColor: {
    color: palette.textBlack,
  },
  labelColorCompleted: {
    color: palette.textWhite,
  },
  labelTextSizeS: {
    ...typography.headline6,
  },
  labelTextSizeM: {
    ...typography.headline5,
  },
  labelTextSizeL: {
    ...typography.headline4,
  },
  labelTextSizeXL: {
    ...typography.headline3,
  },
  textContainer: {
    backgroundColor: palette.background,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
