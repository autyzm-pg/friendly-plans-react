import { IconButton, StyledText } from 'components';
import { i18n } from 'locale';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { dimensions, palette, typography } from 'styles';

interface Props {
  value: string;
  onChange?: (value: boolean) => void;
}

export const AlarmSoundSetting: SFC<Props> = ({ value, onChange }) => (
  <View style={styles.container}>
    <StyledText style={styles.label}>{i18n.t('studentSettings:alarmSound')}</StyledText>
    <View style={styles.soundPickerContainer}>
      <StyledText style={styles.soundPicker}>{value}</StyledText>
      <IconButton name="chevron-right" type="material" size={30} color={palette.textDisabled} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: dimensions.spacingMedium,
    height: 40,
  },
  label: {
    ...typography.subtitle,
    color: palette.textBody,
  },
  soundPicker: {
    ...typography.overline,
    color: palette.textDisabled,
    marginRight: dimensions.spacingBig,
  },
  soundPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
