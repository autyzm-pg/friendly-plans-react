import React from 'react';
import { StyleSheet, View,} from 'react-native';

import ScrollPicker from 'react-native-picker-scrollview';

import { StyledText } from 'components';
import { palette } from 'styles';

interface Props {
		setPicker: (nr: number ) => void;
		startNumber: number;
}

interface State {
  showTimePicker: boolean;
}

const scrollData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

export class ScrollNumberPicker extends React.PureComponent<Props, State> {
	
  toDoublePrecision = (nr: number) => (Math.floor(nr / 10) === 0) ? '0'+ nr : nr;

  render() {
    return (
			<ScrollPicker
				ref={(nr: number) => this.props.setPicker(nr)}
				style={styles.dialogContentColumn}
				dataSource={scrollData}
				selectedIndex={this.props.startNumber}
				highlightColor={palette.primaryDark}
				wrapperColor={'#ffffff'}
				itemHeight={50}
				wrapperHeight={50*4-2*20}
				renderItem={(data: number, index: number, isSelected: boolean) => {
						return( <StyledText>{this.toDoublePrecision(data)}</StyledText>);
				}} 
				onValueChange={(data: number, selectedIndex:number) => {
					selectedIndex=selectedIndex;
				}}
			/>   
    );
  }
}

const styles = StyleSheet.create({
  dialogContentColumn: {
    backgroundColor: palette.white,
  },
});
