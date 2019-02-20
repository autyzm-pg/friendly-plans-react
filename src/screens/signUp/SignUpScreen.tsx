import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { SignUpFormContainer } from './SignUpFormContainer';

export class SignUpScreen extends React.PureComponent<NavigationInjectedProps> {
  render() {
    return (
      <FullScreenTemplate padded narrow>
        <SignUpFormContainer />
      </FullScreenTemplate>
    );
  }
}
