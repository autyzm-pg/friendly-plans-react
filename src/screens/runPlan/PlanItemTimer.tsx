import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';

interface Props {
  itemTime: number;
}

interface State {
  itemTime: number;
  seconds: string;
  minutes: string;
}

export class PlanItemTimer extends React.PureComponent<Props, State>  {
  timerID: any;

  state: Readonly<State> = {
    itemTime: this.props.itemTime,
    seconds: ((this.props.itemTime % 60 < 10) ? '0' : '') + (this.props.itemTime % 60),
    minutes: (this.props.itemTime / 60).toFixed(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    (this.state.itemTime <= 0) ? clearInterval(this.timerID) : this.updateState();
  }

  updateState = () => {
    this.setState((state)=>({itemTime: state.itemTime - 1}));
    this.setState((state)=>({
      seconds: ((state.itemTime % 60 < 10) ? '0' : '') + (state.itemTime % 60),
      minutes: (state.itemTime / 60).toFixed(),
    }));
  }

  itemTimeText = () => {
    return this.state.minutes + ':' + this.state.seconds;
  }

  render() {
    return (
      <View style={styles.timeContainer}>
        <Icon name="timer" size={64} />
        <StyledText style={styles.timeText}>{this.itemTimeText()}</StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 32,
  },
});
