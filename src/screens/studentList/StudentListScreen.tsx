import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { Student } from 'models';
import { StudentList } from './StudentList';

interface State {
  student: Student;
}

export class StudentListScreen extends React.PureComponent<NavigationInjectedProps, State> {
  // todo this screen is temporary for testing StudentList component!
  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      student: props.navigation.getParam('student'),
    };
  }

  render() {
    return (
      <FullScreenTemplate>
        <StudentList />
      </FullScreenTemplate>
    );
  }
}
