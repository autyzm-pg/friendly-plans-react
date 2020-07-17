import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';

import Sound from 'react-native-sound';
import sounds from '../../assets/sounds/sounds';

interface Props {
  itemTime: number;
}

interface State {
  itemTime: number;
  isPlaying: boolean;
  currentLoop: number;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  timerID: any;
  soundTrack: any;
  maxLoop: number = 3;

  state: Readonly<State> = {
    itemTime: this.props.itemTime,
    isPlaying: false,
    currentLoop: 0,
  };

  seconds = () => (this.state.itemTime % 60 < 10 ? '0' : '') + (this.state.itemTime % 60);
  minutes = () => Math.floor(this.state.itemTime / 60);

  itemTimeText = () => this.minutes() + ':' + this.seconds();

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ itemTime: nextProps.itemTime });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.initializeAlarm();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);

    this.soundTrack.stop();
    this.soundTrack.release();
  }

  initializeAlarm = () => {
    this.soundTrack = new Sound(sounds.timerEndOfTime, Sound.MAIN_BUNDLE, error => {
      if (error) {
        this.setState({ isPlaying: false });
      }
    });
  };

  playInLoop = () => {
    const { currentLoop } = this.state;
    if (currentLoop < this.maxLoop) {
      this.setState({ currentLoop: currentLoop + 1 });
      this.soundTrack.play((success: boolean) => {
        if (success) {
          this.playInLoop();
        }
      });
    } else {
      this.soundTrack.stop();
    }
  };

  HandleTimesUp = () => {
    this.setState({ isPlaying: true });
    this.playInLoop();
    clearInterval(this.timerID);
  };

  decreaseTime() {
    this.setState(state => ({ itemTime: state.itemTime - 1 }));
  }

  tick = () => {
    this.state.itemTime <= 0 ? this.HandleTimesUp() : this.decreaseTime();
  };

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
