import React from 'react';
import {
  StyleSheet,
  Text,
  TimePickerAndroid,
  TouchableOpacity,
} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

import { Icon, StyledText } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemTime: number;
  itemTimeText: string;
  visible: boolean;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemTime: this.props.planItem.time,
      itemTimeText: (this.props.planItem.time!!) 
        ? (this.props.planItem.time / 60).toFixed() + ':' + this.props.planItem.time % 60
        : '',
        visible: false,
    };
  }

  render() {
    const { itemTimeText } = this.state;

    return (
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <Icon name="timer" size={64} />
        {!!itemTimeText && <Text style={styles.timeText}>{itemTimeText}</Text>}

        <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {this.setState({ visible: false });}}>
            <DialogContent>
              <StyledText> time </StyledText>
            </DialogContent>
        </Dialog>      
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
  },
});
