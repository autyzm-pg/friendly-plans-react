import React, { SFC } from 'react';

import { Emoji } from 'components';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  emoji: string;
  onPress: (emoji: string) => void;
}

export const EmojiButton: SFC<Props> = ({ emoji, onPress }) => {
  const selectEmoji = () => onPress(emoji);

  return (
    <TouchableOpacity style={styles.emojiButton} onPress={selectEmoji}>
      <Emoji symbol={emoji} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emojiButton: {
    margin: 14,
  },
});
