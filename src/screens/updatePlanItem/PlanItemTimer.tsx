import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

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

  rednerFooter = () => {
    return (
      <DialogFooter>
        <DialogButton
          text="cancel"
          onPress={() => {this.setState({ visible: false });} }
        />
        <DialogButton
          text="ok"
          onPress={() => {this.setState({ visible: false });} }
        />
      </DialogFooter>
    )
  }

  render() {
    const { itemTimeText } = this.state;

    return (
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <Icon name="timer" size={64} />
        {!!itemTimeText && <Text style={styles.timeText}>{itemTimeText}</Text>}

        <Dialog
            width={.3}
            height={.7}
            visible={this.state.visible}
            onTouchOutside={() => {this.setState({ visible: false });}}
            footer={this.rednerFooter()}>
            <DialogContent style={styles.dialogcontent}>
              <StyledText style={styles.wheeler}>minutes</StyledText>
              <StyledText style={styles.wheeler}>seconds</StyledText>
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
  dialogcontent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  wheeler: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch',
    margin: 10,
  },
});
