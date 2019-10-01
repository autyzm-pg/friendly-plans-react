import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

import { Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';

const actions = [
  {
    name: 'create-task',
    icon: <Icon name="layers" type="material" color={palette.primary} size={32} />,
    text: i18n.t('updatePlan:addTask'),
    position: 1,
    color: palette.background,
    textBackground: palette.primary,
    textColor: palette.textWhite,
  },
  {
    name: 'create-interaction',
    icon: <Icon name="group" type="material" color={palette.secondary} size={32} />,
    text: i18n.t('updatePlan:addInteraction'),
    position: 2,
    color: palette.background,
    textBackground: palette.primary,
    textColor: palette.textWhite,
  },
  {
    name: 'create-break',
    icon: <Icon name="notifications" type="material" color={palette.break} size={32} />,
    text: i18n.t('updatePlan:addBreak'),
    position: 3,
    color: palette.background,
    textBackground: palette.primary,
    textColor: palette.textWhite,
  },
];

interface State {
  actionName: string;
}

export class FixedCreatePlanSubItemButton extends React.PureComponent<{}, State> {
  state: State = {
    actionName: '',
  };

  onPressItem = (name: any) => {
    this.setState({
      actionName: name,
    });
  };

  render() {
    return (
      <>
        <StyledText>{this.state.actionName}</StyledText>
        <FloatingAction
          color={palette.secondary}
          actions={actions}
          overlayColor="rgba(97, 91, 185, 1)"
          onPressItem={this.onPressItem}
        />
      </>
    );
  }
}
