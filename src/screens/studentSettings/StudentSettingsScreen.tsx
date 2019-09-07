import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { NarrowScreenTemplate } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { SlideCardSwitch } from './SlideCardSwitch';
import { StudentDisplaySettings } from './StudentDisplaySettings';
import { StudentTextCaseSettings } from './StudentTextCaseSettings';
import { StudentTextSizeSettings } from './StudentTextSizeSettings';

interface State {
  student: Student;
}

export class StudentSettingsScreen extends React.PureComponent<NavigationInjectedProps, State> {
  get screenName(): string {
    return i18n.t('studentSettings:screenTitle', {
      studentName: this.props.navigation.getParam('student').name,
    });
  }

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      student: props.navigation.getParam('student'),
    };
  }

  render() {
    const { navigation } = this.props;
    const { student } = this.state;
    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation}>
        <StudentDisplaySettings student={student} />
        <StudentTextSizeSettings student={student} />
        <StudentTextCaseSettings student={student} />
        <SlideCardSwitch student={student} />
      </NarrowScreenTemplate>
    );
  }
}
