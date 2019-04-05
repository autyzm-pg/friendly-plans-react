import React from 'react';
import {TimePickerAndroid, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { Icon } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemTime: string;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemTime: '',
    };
  }

  pickTime = async () => {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 0,
        minute: 5,
        is24Hour: true,
        mode: 'spinner',
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          itemTime: hour * 60 + ':' + minute
        });
      }
    } catch ({code, message}) {}
  };

  render() {
    const { itemTime } = this.state;

    return (
      <TouchableOpacity onPress={this.pickTime}>
        <Icon name="timer" size={64} />
        {!!itemTime && <Text style={styles.timeText}>{itemTime}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
  },
});
