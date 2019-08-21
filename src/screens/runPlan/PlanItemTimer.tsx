import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';

interface Props {
  itemTime: number;
}

export class PlanItemTimer extends React.PureComponent<Props> {

  state = {
    itemTime: this.props.itemTime,
  }
  itemTimeText(){
    return ((this.state.itemTime / 60).toFixed()) + ':' + (this.state.itemTime % 60);
  }

  render() {
    return (
      <View style={styles.icon}>
        <Icon name="timer" size={64} />
        <StyledText style={styles.timeText}>{this.itemTimeText()}</StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
  },
  icon: {
  },
});
