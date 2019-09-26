import React, { PureComponent } from 'react';

import { FixedValueSlider } from 'components';
import { i18n } from 'locale';
import { Student, StudentDisplayOption } from 'models';

interface Props {
  student: Student;
}

export class StudentDisplaySettings extends PureComponent<Props> {
  options = [
    {
      value: StudentDisplayOption.LargeImageSlide,
      label: i18n.t('studentSettings:largeImageSlide'),
    },
    {
      value: StudentDisplayOption.ImageWithTextSlide,
      label: i18n.t('studentSettings:imageWithTextSlide'),
    },
    {
      value: StudentDisplayOption.TextSlide,
      label: i18n.t('studentSettings:textSlide'),
    },
    {
      value: StudentDisplayOption.ImageWithTextList,
      label: i18n.t('studentSettings:imageWithTextList'),
    },
    {
      value: StudentDisplayOption.TextList,
      label: i18n.t('studentSettings:textList'),
    },
  ];

  onSlidingComplete = (displaySettings: string) => {
    this.props.student.update({ displaySettings });
  };

  render() {
    return (
      <FixedValueSlider
        {...this.props}
        value={this.props.student.displaySettings}
        options={this.options}
        onSlidingComplete={this.onSlidingComplete}
      />
    );
  }
}
