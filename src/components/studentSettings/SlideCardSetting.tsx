import React from 'react';

import { SwitchItem } from 'components';
import { i18n } from 'locale';

interface Props {
  value: boolean;
  onValueChange: (isUpperCase: boolean) => void;
}

export class SlideCardSetting extends React.PureComponent<Props> {
  render() {
    return (
      <SwitchItem
        label={i18n.t('studentSettings:blockSwipe')}
        value={this.props.value}
        onValueChange={this.props.onValueChange}
      />
    );
  }
}
