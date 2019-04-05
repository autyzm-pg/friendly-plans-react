import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { StudentDisplaySettings } from './StudentDisplaySettings';
import { SlideCardSwitch } from '../studentSettings/SlideCardSwitch'
import { StudentTextSettings } from './StudentTextSettings';

interface State {
  student: Student;
}

export class StudentSettingsScreen extends React.PureComponent<
  NavigationInjectedProps,
  State
> {
  static navigationOptions = ({ navigation }: NavigationInjectedProps) => {
    return {
      title: i18n.t('studentSettings:screenTitle', {
        studentName: navigation.getParam('student').name,
      }),
    };
  };

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      student: props.navigation.getParam('student'),
    };
  }

  render() {
    return (
      <FullScreenTemplate>
        <StudentDisplaySettings student={this.state.student} />
        <Card>
          <StudentTextSettings student={this.state.student} />
        </Card>
        <SlideCardSwitch student={this.state.student}></SlideCardSwitch>
      </FullScreenTemplate>
    );
  }
}
