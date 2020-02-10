import React from 'react';
import { StyleSheet } from 'react-native';

import { FullScreenTemplate, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';

import { ResetPasswordBackground } from './ResetPasswordBackground';
import { ResetPasswordForm } from './ResetPasswordForm';

export class ResetPasswordScreen extends React.PureComponent {
  render() {
    return (
      <>
        <FullScreenTemplate padded narrow extraStyles={styles.fullScreen}>
          <StyledText style={styles.guideText}>{i18n.t('resetPassword:guide1')}</StyledText>
          <ResetPasswordForm />
        </FullScreenTemplate>
        <ResetPasswordBackground />
      </>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    paddingVertical: 85,
    backgroundColor: palette.welcomeBackground,
  },
  guideText: {
    ...typography.body,
    color: palette.textDisabled,
    paddingHorizontal: 50,
  },
});
