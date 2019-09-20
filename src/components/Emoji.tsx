import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { typography } from 'styles';

interface Props {
  symbol: string;
}

export const Emoji: SFC<Props> = ({ symbol }) => <Text style={styles.emoji}>{symbol}</Text>;

const styles = StyleSheet.create({
  emoji: {
    fontSize: 24,
  },
});
