import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { palette, typography } from 'styles';
import { StyledText } from './StyledText';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

interface State {
  value: boolean;
}

export class SwitchItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onValueChange = (value: boolean) => {
    this.setState({ value });
    this.props.onValueChange(value);
  };

  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <StyledText style={styles.label}>{label}</StyledText>
        <Switch
          value={this.state.value}
          onValueChange={this.onValueChange}
          thumbColor={palette.primary}
          trackColor={{ false: palette.backgroundDark, true: palette.primaryLight }}
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
    ...typography.subtitle1,
    color: palette.textBlack,
  },
});
