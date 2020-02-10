import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Button, FullScreenTemplate, StyledText } from 'components';
import { i18n } from 'locale';
import { Route } from 'navigation';
import { palette, typography } from 'styles';

import { SignInBackground } from './SignInBackground';
import { SignInFormContainer } from './SignInFormContainer';

export class SignInScreen extends React.PureComponent<NavigationInjectedProps> {
  navigateToSignUp = () => this.props.navigation.navigate(Route.SignUp);

  render() {
    return (
      <FullScreenTemplate padded extraStyles={styles.fullScreen}>
        <SignInBackground />
        <View style={styles.container}>
          <StyledText style={styles.title}>Friendly Plan </StyledText>
          <SignInFormContainer />
          <Button
            onPress={this.navigateToSignUp}
            title={i18n.t('signUp:signUp')}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.titleButton}
            backgroundColor={palette.background}
            buttonStyle={styles.button}
          />
        </View>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: 272, marginHorizontal: 'auto', alignSelf: 'center' },
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
  fullScreen: {
    backgroundColor: palette.welcomeBackground,
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    borderRadius: 12,
    height: 44,
  },
  title: {
    color: palette.primary,
    fontSize: 48,
    marginBottom: 48,
  },
  titleButton: {
    color: palette.primary,
  },
});
