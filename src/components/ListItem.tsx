import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { IconProps } from 'react-native-elements';

import { palette, typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Props {
  title: string;
  subtitle?: string;
  icon?: IconProps;
  onPress?: () => void;
}

export const ListItem: React.FunctionComponent<Props> = ({ title, subtitle, icon, onPress }) => (
  <TouchableHighlight underlayColor={palette.underlay} onPress={onPress}>
    <View style={styles.container}>
      {!!icon && <Icon {...icon} containerStyle={styles.iconContainer} />}
      <View style={styles.textContainer}>
        <StyledText style={styles.title}>{title}</StyledText>
        {!!subtitle && <StyledText style={styles.subtitle}>{subtitle}</StyledText>}
      </View>
    </View>
  </TouchableHighlight>
);

ListItem.displayName = 'ListItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  iconContainer: {
    paddingHorizontal: 12,
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 12,
    flex: 1,
  },
  title: {
    ...typography.subtitle,
    color: palette.textBlack,
    marginBottom: 2,
  },
  subtitle: {
    ...typography.subtitle,
    color: palette.textDisabled,
  },
});
