import React from 'react';

import { SwitchItem } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';

interface Props {
  student: Student;
}

export class SlideCardSwitch extends React.PureComponent<Props> {
  onValueChange = (isSwipeBlocked: boolean) => this.props.student.update({ isSwipeBlocked });

  render() {
    return (
      <SwitchItem
        label={i18n.t('studentSettings:blockSwipe')}
        value={this.props.student.isSwipeBlocked}
        onValueChange={this.onValueChange}
      />
    );
  }
}
