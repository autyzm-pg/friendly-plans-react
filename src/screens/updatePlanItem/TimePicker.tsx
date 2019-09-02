import React from 'react';
import { StyleSheet, View,} from 'react-native';

import Dialog, { DialogButton, DialogContent, DialogFooter } from 'react-native-popup-dialog';

import { palette } from 'styles';
import { ScrollNumberPicker } from './ScrollNumberPicker';

interface Props {
  startMinute: number;
  startSecond: number;
  onPressShowTimePicker: () => boolean;
  onTimeSet: (minutes, seconds) => void;
}

interface State {
  showTimePicker: boolean;
}

export class TimePicker extends React.PureComponent<Props, State> {
	
  minutesPicker: any;
  secondsPicker: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      showTimePicker: this.props.onPressShowTimePicker(),
    };
	}

  componentWillReceiveProps(nextProps: Props) {
    this.setState({showTimePicker: nextProps.onPressShowTimePicker()});
  }

  renderFooter = () => {
    return (
      <DialogFooter>
        <DialogButton
          style={styles.dialogButton}
          text="cancel"
          onPress={() => {this.setState({ showTimePicker: false });} }
        />
        <DialogButton
          style={styles.dialogButton}
          text="ok"
          onPress={() => {
            this.props.onTimeSet(this.minutesPicker.getSelected(), this.secondsPicker.getSelected());
            this.setState({ showTimePicker: false });
            }
          }
        />
      </DialogFooter>
    );
  }

  toDoublePrecision = (nr: number) => (Math.floor(nr / 10) === 0) ? '0'+ nr : nr;

  setMinutesPicker = (minutes: number) => this.minutesPicker = minutes;
  setSecondsPicker = (seconds: number) => this.secondsPicker = seconds;

  render() {
    return (
			<Dialog
				width={.3}
				height={.7}
				visible={this.state.showTimePicker}
				onTouchOutside={() => {this.setState({ showTimePicker: false });}}
				footer={this.renderFooter()}>

				<DialogContent style={styles.dialogContent}>
          <ScrollNumberPicker 
            startNumber={this.props.startMinute}
            setPicker={(nr: number) => this.setMinutesPicker(nr)} 
          />
					<View style={styles.dialogContentMiddleColumn} />
          <ScrollNumberPicker  
            startNumber={this.props.startSecond}
            setPicker = {(nr: number) => this.setSecondsPicker(nr)} 
          />
				</DialogContent>

			</Dialog>      
    );
  }
}

const styles = StyleSheet.create({
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
