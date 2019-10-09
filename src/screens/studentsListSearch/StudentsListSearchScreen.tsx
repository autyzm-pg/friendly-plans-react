import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { IconButton, NarrowScreenTemplate, Separator, StyledText } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { Text } from 'react-native-elements';
import { palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  students: Student[];
}

export class StudentsListSearchScreen extends React.PureComponent<Props> {
  get screenName(): string {
    return i18n.t('studentsList:screenTitle');
  }

  render() {
    const { navigation } = this.props;
    const students = navigation.getParam('students');

    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation} isSecondaryView>
        <Text>test</Text>
      </NarrowScreenTemplate>
    );
  }
}
