import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

import { Icon, StyledText } from 'components';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { TimePicker } from './TimePicker';

interface Props {
  planItem: PlanItem;
}

interface State {
  visible: boolean;
}

const scrollData = 

[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,

48,49,50,51,52,53,54,55,56,57,58,59,60]

export class PlanItemTimer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  minutesPicker: any;
  secondsPicker: any;

  itemTimeText = () => {
    return (
      Math.floor(this.props.planItem.time / 60) + ':' 
      + ((this.props.planItem.time % 60 < 10) ? '0' : '' )
      + this.props.planItem.time % 60
    )
  }
  updatePlanItemTime = (minutes: number, seconds: number) => {
    this.props.planItem.update({
      time: minutes*60 + seconds
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <Icon name="timer" size={64} />
        {!!this.props.planItem.time && <Text style={styles.timeText}>{this.itemTimeText()}</Text>}

        <TimePicker 
          visible={this.state.visible} 
          onTimeSet={(minutes, seconds) => this.updatePlanItemTime(minutes, seconds)}/>     
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
