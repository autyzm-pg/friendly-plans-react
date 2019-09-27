import React from 'react';

import { FixedValueSlider } from 'components';
import { i18n } from 'locale';
import { Student, StudentTextSizeOption } from 'models';

interface Props {
  student: Student;
}

export class StudentTextSizeSettings extends React.PureComponent<Props> {
  options = [
    {
      value: StudentTextSizeOption.Small,
      label: i18n.t('studentSettings:textSettingsSizeS'),
    },
    {
      value: StudentTextSizeOption.Medium,
      label: i18n.t('studentSettings:textSettingsSizeM'),
    },
    {
      value: StudentTextSizeOption.Large,
      label: i18n.t('studentSettings:textSettingsSizeL'),
    },
    {
      value: StudentTextSizeOption.ExtraLarge,
      label: i18n.t('studentSettings:textSettingsSizeXL'),
    },
  ];

  onSlidingComplete = (textSize: string) => {
    this.props.student.update({ textSize });
  };

  render() {
    return (
      <FixedValueSlider
        value={this.props.student.textSize}
        options={this.options}
        onSlidingComplete={this.onSlidingComplete}
      />
    );
  }
}
