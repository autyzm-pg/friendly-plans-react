import React from 'react';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { headerStyle } from 'styles';
import { SignOutListItem } from './SignOutListItem';

export class SettingsScreen extends React.PureComponent {
  static navigationOptions = {
    title: i18n.t('settings:settings'),
    headerTitleStyle: headerStyle.headerText,
  };

  render() {
    return (
      <FullScreenTemplate>
        <SignOutListItem />
      </FullScreenTemplate>
    );
  }
}
