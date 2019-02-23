import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { IconProps } from 'react-native-elements';

import { Icon, StyledText } from 'components';
import { palette, typography } from '../../styles';

interface Props {
  icon: IconProps;
  onPress?: () => void;
  label: string;
}

export class SidebarItem extends React.PureComponent<Props> {
  render() {
    const { icon, onPress, label } = this.props;
    return (
      <TouchableHighlight onPress={onPress} underlayColor={palette.underlay}>
        <View style={styles.container}>
          <Icon {...icon} iconStyle={styles.icon} />
          <StyledText style={styles.label}>{label}</StyledText>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: palette.textWhite,
    fontSize: 28,
  },
  label: {
    marginTop: 8,
    textAlign: 'center',
    color: palette.textWhite,
    ...typography.caption,
  },
});
