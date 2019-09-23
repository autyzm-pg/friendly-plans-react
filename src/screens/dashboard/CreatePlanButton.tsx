import React from 'react';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { Plan, Student } from 'models';
import { palette } from 'styles';

interface Props {
  student: Student;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  createPlanForStudent = () => Plan.create(this.props.student);

  render() {
    return (
      <FlatButton
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'database-plus',
          type: 'material-community',
          color: palette.primaryVariant,
        }}
        onPress={this.createPlanForStudent}
      />
    );
  }
}
