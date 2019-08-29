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

  rednerFooter = () => {
    return (
      <DialogFooter>
        <DialogButton
          style={styles.dialogButton}
          text="cancel"
          onPress={() => {this.setState({ visible: false });} }
        />
        <DialogButton
          style={styles.dialogButton}
          text="ok"
          onPress={() => {
            this.props.planItem.update({
              time: this.minutesPicker.getSelected()*60 + this.secondsPicker.getSelected()
            });
            this.setState({ 
              visible: false });
            }
          }
        />
      </DialogFooter>
    )
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <Icon name="timer" size={64} />
        {!!this.props.planItem.time && <Text style={styles.timeText}>{this.itemTimeText()}</Text>}

        <Dialog
          width={.3}
          height={.7}
          visible={this.state.visible}
          onTouchOutside={() => {this.setState({ visible: false });}}
          footer={this.rednerFooter()}>
          <DialogContent style={styles.dialogContent}>
            <ScrollPicker
              ref={(minutes) => {this.minutesPicker = minutes}}
              style={styles.dialogContentColumn}
              dataSource={scrollData}
              selectedIndex={0}
              highlightColor={palette.primary}
              itemHeight={50}
              wrapperHeight={50*4-2*20}
              renderItem={(data: number, index: number, isSelected: boolean) => {
                return(<StyledText>{data}</StyledText>) 
              }}
              onValueChange={(data, selectedIndex) => {
                selectedIndex=selectedIndex
              }}
              />
            <View style={styles.dialogContentMiddleColumn} />
            <ScrollPicker
              ref={(seconds) => {this.secondsPicker = seconds}}
              style={styles.dialogContentColumn}
              dataSource={scrollData}
              selectedIndex={0}
              highlightColor={palette.primaryDark}
              itemHeight={50}
              wrapperHeight={50*4-2*20}
              renderItem={(data: number, index: number, isSelected: boolean) => {
                return( <StyledText>{(Math.floor(data / 10) == 0) ? '0'+ data : data}</StyledText>)
              }} 
              onValueChange={(data, selectedIndex) => {
                selectedIndex=selectedIndex
              }}
            />
          </DialogContent>
        </Dialog>      
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 32,
    color: palette.primary,
  },
  dialog: {
    flex:1,
  },
  dialogContent: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  dialogButton: {
    flex: 1,
    height:50,
  },
  dialogContentMiddleColumn: {
    backgroundColor: palette.white,
    width: 15,
  },
  dialogContentColumn: {
    backgroundColor: palette.white,
  },
});
