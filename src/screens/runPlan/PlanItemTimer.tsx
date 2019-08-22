import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';

interface Props {
  itemTime: number;
}

interface State {
  itemTime: number;
}

export class PlanItemTimer extends React.PureComponent<Props, State>  {
  timerID: any;

  state: Readonly<State> = {
    itemTime: this.props.itemTime
  };

  componentWillReceiveProps(nextProps: Props) {
    clearInterval(this.timerID);
    this.setState({itemTime: nextProps.itemTime})
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    (this.state.itemTime <= 0) ? this.HandleTimesUp() : this.setState((state)=>({itemTime: state.itemTime - 1}));
  }

  HandleTimesUp = () => {
    clearInterval(this.timerID);
    console.log('Time is up!');
  }

  seconds = () => {return ((this.state.itemTime % 60 < 10) ? '0' : '') + (this.state.itemTime % 60)};
  minutes = () => {return (this.state.itemTime / 60).toFixed()};

  itemTimeText = () => {
    return this.minutes() + ':' + this.seconds();
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
