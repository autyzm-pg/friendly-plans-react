import React from 'react';
import { StyleSheet, View } from 'react-native';

import { palette } from '../styles';
import { Icon } from './Icon';
import { IconButton } from './IconButton';

interface Props {
  icons: string[]; // icons name
  onPress: (value: boolean) => void;
}

interface State {
  isFirstOn: boolean;
}

export class IconToggleButton extends React.PureComponent<Props, State> {
  state = {
    isFirstOn: true,
  };

  handlePressFirst = () => {
    this.setState({
      isFirstOn: true,
    });
    this.props.onPress(true);
  };

  handlePressSecond = () => {
    this.setState({
      isFirstOn: false,
    });
    this.props.onPress(false);
  };

  render() {
    const [firstIcon, secondIcon] = this.props.icons;

    return (
      <View style={styles.toggleButtonContainer}>
        <View>
          <IconButton
            name={firstIcon}
            type="material"
            onPress={this.handlePressFirst}
            size={24}
            color={palette.primaryVariant}
          />
          <View style={this.state.isFirstOn ? styles.buttonOn : styles.buttonOff}>
            <Icon name={firstIcon} type="material" size={24} color={palette.primaryVariant} />
          </View>
        </View>
        <View>
          <IconButton
            name={secondIcon}
            type="material"
            onPress={this.handlePressSecond}
            size={24}
            color={palette.primaryVariant}
          />
          <View style={!this.state.isFirstOn ? styles.buttonOn : styles.buttonOff}>
            <Icon name={secondIcon} type="material" size={24} color={palette.primaryVariant} />
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    left: -10,
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: 45,
    height: 45,
    borderRadius: 50,
    elevation: 2,
    shadowColor: palette.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonOff: {
    display: 'none',
  },
});
