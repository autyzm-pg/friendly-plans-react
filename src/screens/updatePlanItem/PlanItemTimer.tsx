import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'components';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { TimePicker } from './TimePicker';

interface Props {
  planItem: PlanItem;
}

interface State {
  visible: boolean;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  minutesPicker: any;
  secondsPicker: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  itemTimeText = () => {
    return (
      Math.floor(this.props.planItem.time / 60) + ':' 
      + ((this.props.planItem.time % 60 < 10) ? '0' : '' )
      + this.props.planItem.time % 60
    );
  }
  
  updatePlanItemTime = (minutes: number, seconds: number) => {
    this.props.planItem.update({
      time: minutes*60 + seconds
    });
  }

  wasTimerPressed = () => this.state.visible;

  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <Icon name="timer" size={64} />
        {!!this.props.planItem.time && <Text style={styles.timeText}>{this.itemTimeText()}</Text>}

        <TimePicker 
          startMinute={Math.floor(this.props.planItem.time/60)}
          startSecond={this.props.planItem.time%60}
          onPressShowTimePicker={() => this.wasTimerPressed()} 
          onTimeSet={(minutes, seconds) => {
            this.updatePlanItemTime(minutes, seconds);
            this.setState({visible: false});
          }}/>   
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
    color: palette.primary,
  },
});
