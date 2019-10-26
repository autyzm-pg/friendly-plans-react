import { noop } from 'lodash';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { dimensions } from 'styles';

import { EMOJIS_LIST } from '../../assets/emojis';
import { EmojiButton } from './EmojiButton';

interface Props extends NavigationInjectedProps {
  onEmojiSelect: (emoji: string) => void;
  closeModal?: () => void;
}

const IconSelectModalBase: SFC<Props> = ({ closeModal = noop, onEmojiSelect }) => {
  const onEmojiPress = (emoji: string) => {
    onEmojiSelect(emoji);
    closeModal();
  };

  const renderEmojiButtons = () =>
    EMOJIS_LIST.map((emoji, index) => {
      return <EmojiButton key={index} emoji={emoji} onPress={onEmojiPress} />;
    });

  return <View style={styles.container}>{renderEmojiButtons()}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: dimensions.spacingSmall,
  },
});

export const IconSelectModal = withNavigation(IconSelectModalBase);
