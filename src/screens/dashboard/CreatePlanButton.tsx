import React from 'react';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { palette } from 'styles';

interface Props {
  student: Student;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  createPlanForStudent = () => this.props.student.createPlan();

  render() {
    return (
      <FlatButton
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'database-plus',
          type: 'material-community',
          color: palette.primaryDark,
        }}
        onPress={this.createPlanForStudent}
      />
    );
  }
}
