import { Button } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { palette } from 'styles';

interface Props {
  onPress: () => void;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  render() {
    return (
      <Button
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'addfile',
          type: 'antdesign',
          color: palette.textWhite,
          size: 13,
        }}
        isUppercase
        onPress={this.props.onPress}
      />
    );
  }
}
