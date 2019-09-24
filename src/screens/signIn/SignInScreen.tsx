import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FlatButton, FullScreenTemplate, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import { SignInAsAnonymousButton } from './SignInAsAnonymousButton';
import { SignInFormContainer } from './SignInFormContainer';

export class SignInScreen extends React.PureComponent<NavigationInjectedProps> {
  navigateToSignUp = () => this.props.navigation.navigate('SignUp');

  render() {
    return (
      <FullScreenTemplate padded narrow>
        <SignInFormContainer />

        <StyledText style={styles.signUpTip}>{i18n.t('signIn:signUpTip')}</StyledText>
        <FlatButton onPress={this.navigateToSignUp} title={i18n.t('signUp:signUpButton')} />

        <StyledText style={styles.anonymousTip}>{i18n.t('signIn:anonymousTip')}</StyledText>
        <SignInAsAnonymousButton />
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  signUpTip: {
    ...typography.caption,
    color: palette.textDisabled,
    textAlign: 'center',
    marginTop: 4,
  },
  anonymousTip: {
    ...typography.caption,
    color: palette.textDisabled,
    textAlign: 'center',
    marginTop: 20,
  },
});
