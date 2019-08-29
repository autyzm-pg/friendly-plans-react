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

  seconds = () => ((this.state.itemTime % 60 < 10) ? '0' : '') + (this.state.itemTime % 60);
  minutes = () => Math.floor(this.state.itemTime / 60);

  itemTimeText = () => this.minutes() + ':' + this.seconds();

  componentWillReceiveProps(nextProps: Props) {
    this.setState({itemTime: nextProps.itemTime});
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
