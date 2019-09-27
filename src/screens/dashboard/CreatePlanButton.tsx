import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

import { Icon } from 'components';
import { Student } from 'models';
import { palette } from 'styles';

interface Props {
  onPress: () => void;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  render() {
    return (
      <FloatingAction
        overrideWithAction
        actions={[
          {
            name: 'create student',
            icon: <Icon name="add" type="material" color={palette.secondary} size={32} />,
          },
        ]}
        onPressItem={this.props.onPress}
      />
    );
  }
}
