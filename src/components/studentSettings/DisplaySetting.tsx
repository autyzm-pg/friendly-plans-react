import React, { PureComponent } from 'react';

import { FixedValueSlider } from 'components';
import { i18n } from 'locale';
import { StudentDisplayOption } from 'models';

interface Props {
  value: StudentDisplayOption;
  onValueChange: (displaySettings: StudentDisplayOption) => void;
}

export class DisplaySetting extends PureComponent<Props> {
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

  render() {
    return (
      <FixedValueSlider
        value={this.props.value}
        options={this.options}
        onSlidingComplete={this.props.onValueChange}
        iconLeft={{ name: 'image', size: 26 }}
        iconRight={{ name: 'format-list-bulleted', size: 26 }}
      />
    );
  }
}
