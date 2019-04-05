import React from 'react';

import { FullScreenTemplate } from 'components';
import { NavigationInjectedProps } from 'react-navigation';
import { i18n } from '../../locale';

export class StudentSettingsScreen extends React.PureComponent {

  static navigationOptions = ({ navigation }: NavigationInjectedProps) => {
    return {
      title: i18n.t('studentSettings:screenTitle', {
        studentName: navigation.getParam('student').name,
      }),
    };
  };

  render() {
    return (
      <FullScreenTemplate>

      </FullScreenTemplate>
    );
  }
}
