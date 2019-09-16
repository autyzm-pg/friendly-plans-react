import React from 'react';
import { StyleSheet } from 'react-native';

import { FullScreenTemplate, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import { ResetPasswordForm } from './ResetPasswordForm';

export class ResetPasswordScreen extends React.PureComponent {
  render() {
    return (
      <FullScreenTemplate padded narrow>
        <StyledText style={styles.guideText}>{i18n.t('resetPassword:guide1')}</StyledText>
        <StyledText style={styles.guideText}>{i18n.t('resetPassword:guide2')}</StyledText>
        <ResetPasswordForm />
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  guideText: {
    ...typography.body1,
    color: palette.textBlackMuted,
    marginVertical: 8,
    textAlign: 'center',
  },
});
