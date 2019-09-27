import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

import { Icon } from 'components';
import { palette } from 'styles';

interface Props {
  onPress: () => void;
  actionsName: string;
}

export class CreateButton extends React.PureComponent<Props> {
  render() {
    return (
      <FloatingAction
        overrideWithAction
        actions={[
          {
            name: this.props.actionsName,
            icon: <Icon name="add" type="material" color={palette.secondary} size={32} />,
          },
        ]}
        onPressItem={this.props.onPress}
      />
    );
  }
}
