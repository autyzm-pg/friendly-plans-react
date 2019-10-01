import React, { SFC } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';

import { i18n } from 'locale';
import { palette } from 'styles';
import { StyledText, TextInput } from '../../components';

interface Props extends TextInputProps {
  value: string;
  disabled?: boolean;
}

export const PlanInput: SFC<Props> = ({ value, disabled, ...props }) => (
  <>
    {disabled ? (
      <StyledText style={styles.styledText}>{value}</StyledText>
    ) : (
      <TextInput
        style={styles.textInput}
        placeholder={i18n.t('planActivity:planNamePlaceholder')}
        value={value}
        {...props}
      />
    )}
  </>
);

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 8,
  },
  styledText: {
    color: palette.textBlack,
    marginLeft: 8,
  },
});
