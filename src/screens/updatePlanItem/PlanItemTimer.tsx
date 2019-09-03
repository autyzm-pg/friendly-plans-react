import React from 'react';
import {
  StyleSheet,
  Text,
  TimePickerAndroid,
  TouchableOpacity,
} from 'react-native';

import { Icon, StyledText } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemTime: number;
  itemTimeText: string;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemTime: this.props.planItem.time,
      itemTimeText: (this.props.planItem.time!!)
        ? (this.props.planItem.time / 60).toFixed() + ':' + this.props.planItem.time % 60
        : ''
    };
  }

  pickTime = async () => {
    try {
      // @ts-ignore
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 0,
        minute: 5,
        is24Hour: true,
        mode: 'spinner',
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          itemTimeText: hour + ':' + minute,
        });
        // Now it stores time in minutes but picker will allow minutes and seconds
        // firebase will store seconds
        if (action === TimePickerAndroid.timeSetAction) {
          this.props.planItem.update({
            time: ((hour * 60) + minute),
          });
        }
      }
    } catch ({ code, message }) {
      // tslint:disable-next-line:no-console
      console.warn(message);
    }
  };

  render() {
    const { itemTimeText } = this.state;

    return (
      <TouchableOpacity onPress={this.pickTime}>
        <Icon name="timer" size={64} />
        {!!itemTimeText && <Text style={styles.timeText}>{itemTimeText}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
  },
});
