import React from 'react';
import { StyleSheet, View } from 'react-native';

import { getElevation, palette } from '../styles';
import { IconButton } from './IconButton';

interface Props {
  iconNames: string[];
  secondButtonOn?: boolean;
  onPress: (value: boolean) => void;
}

interface State {
  isFirstButtonOn: boolean;
}

export class IconToggleButton extends React.PureComponent<Props, State> {
  state = {
    isFirstButtonOn: !this.props.secondButtonOn,
  };

  handlePressFirst = () => {
    this.setState({
      isFirstButtonOn: true,
    });
    this.props.onPress(true);
  };

  handlePressSecond = () => {
    this.setState({
      isFirstButtonOn: false,
    });
    this.props.onPress(false);
  };

  render() {
    const [firstIcon, secondIcon] = this.props.iconNames;
    const { isFirstButtonOn } = this.state;

    return (
      <View style={styles.toggleButtonContainer}>
        <View>
          <IconButton
            name={firstIcon}
            type="material"
            onPress={this.handlePressFirst}
            size={24}
            color={palette.primaryVariant}
            iconButtonStyle={isFirstButtonOn && [styles.buttonOn, styles.buttonLeft]}
          />
        </View>
        <View>
          <IconButton
            name={secondIcon}
            type="material"
            onPress={this.handlePressSecond}
            size={24}
            color={palette.primaryVariant}
            iconButtonStyle={!isFirstButtonOn && [styles.buttonOn, styles.buttonRight]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleButtonContainer: {
    borderRadius: 50,
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 85,
    marginHorizontal: 20,
  },
  buttonOn: {
    ...getElevation(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -23,
    backgroundColor: palette.background,
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  buttonLeft: {
    left: -10,
  },
  buttonRight: {
    right: -10,
  },
});
