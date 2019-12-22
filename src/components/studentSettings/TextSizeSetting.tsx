import React from 'react';

import { FixedValueSlider } from 'components';
import { i18n } from 'locale';
import { StudentTextSizeOption } from 'models';

interface Props {
  value: StudentTextSizeOption;
  onValueChange: (displaySettings: StudentTextSizeOption) => void;
}

export class TextSizeSetting extends React.PureComponent<Props> {
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

  render() {
    return (
      <FixedValueSlider
        value={this.props.value}
        options={this.options}
        onSlidingComplete={this.props.onValueChange}
        iconLeft={{ name: 'format-text', size: 22 }}
        iconRight={{ name: 'format-text', size: 34 }}
      />
    );
  }
}
