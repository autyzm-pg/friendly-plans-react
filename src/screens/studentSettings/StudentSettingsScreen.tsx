import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import CreateStudent from './CreateStudent';
import StudentSettings from './StudentSettings';

export class StudentSettingsScreen extends React.PureComponent<NavigationInjectedProps> {
  render() {
    const createStudent = this.props.navigation.getParam('createStudent');

    return <>{createStudent ? <CreateStudent /> : <StudentSettings />}</>;
  }
}
