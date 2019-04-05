import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'components';
import { palette, typography } from 'styles';

interface Props {}
interface State {}

export class PlanItemImagePicker extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="image" size={256} iconStyle={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginEnd: 12,
  },
  input: {
    height: 42,
    ...typography.headline6,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
    marginEnd: 120,
  },
});
