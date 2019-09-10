import React from 'react';

import { SwitchItem } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';

interface Props {
  student: Student;
}

export class StudentTextCaseSettings extends React.PureComponent<Props> {
  onValueChange = (isUpperCase: boolean) => this.props.student.update({ isUpperCase });

  render() {
    return (
      <SwitchItem
        label={i18n.t('studentSettings:uppercase')}
        value={this.props.student.isUpperCase}
        onValueChange={this.onValueChange}
      />
    );
  }
}
