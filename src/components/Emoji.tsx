import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { typography } from 'styles';

interface Props {
  symbol: string;
}

export const Emoji = ({ symbol }: Props) => <Text style={styles.emoji}>{symbol}</Text>;

const styles = StyleSheet.create({
  emoji: {
    fontSize: 24,
  },
});
