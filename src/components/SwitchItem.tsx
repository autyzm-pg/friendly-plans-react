import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { palette, typography } from 'styles';
import { StyledText } from './StyledText';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export class SwitchItem extends React.PureComponent<Props> {
  render() {
    const { label, value, onValueChange } = this.props;
    return (
      <View style={styles.container}>
        <StyledText style={styles.label}>{label}</StyledText>
        <Switch
          value={value}
          onValueChange={onValueChange}
          thumbColor={palette.primary}
          trackColor={{ false: palette.backgroundTinted, true: palette.primaryLight }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: 40,
  },
  label: {
    ...typography.subtitle,
    color: palette.textBlack,
  },
});
