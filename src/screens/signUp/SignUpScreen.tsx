import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';

import { palette } from 'styles';
import { SignUpBackground } from './SignUpBackground';
import { SignUpFormContainer } from './SignUpFormContainer';

export class SignUpScreen extends React.PureComponent<NavigationInjectedProps> {
  render() {
    return (
      <>
        <FullScreenTemplate padded narrow extraStyles={styles.fullScreen}>
          <SignUpFormContainer />
        </FullScreenTemplate>
        <SignUpBackground />
      </>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: palette.welcomeBackground,
    paddingVertical: 37,
  },
});
