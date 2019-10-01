import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

import { Icon } from 'components';
import { i18n } from 'locale';
import { fonts, palette } from 'styles';

const actions = [
  {
    name: 'create-task',
    icon: <Icon name="layers" type="material" color={palette.primary} size={22} />,
    text: i18n.t('updatePlan:addTask'),
    position: 1,
    color: palette.background,
    textBackground: palette.primaryVariant,
    textStyle: { fontSize: 12, fontFamily: fonts.sansSerif.medium },
    textElevation: 0,
    textColor: palette.textWhite,
  },
  {
    name: 'create-interaction',
    icon: <Icon name="group" type="material" color={palette.secondary} size={22} />,
    text: i18n.t('updatePlan:addInteraction'),
    position: 2,
    color: palette.background,
    textBackground: palette.primaryVariant,
    textStyle: { fontSize: 12, fontFamily: fonts.sansSerif.medium },
    textElevation: 0,
    textColor: palette.textWhite,
  },
  {
    name: 'create-break',
    icon: <Icon name="notifications" type="material" color={palette.break} size={22} />,
    text: i18n.t('updatePlan:addBreak'),
    position: 3,
    color: palette.background,
    textBackground: palette.primaryVariant,
    textStyle: { fontSize: 12, fontFamily: fonts.sansSerif.medium },
    textElevation: 0,
    textColor: palette.textWhite,
  },
];

interface State {
  actionName: string;
  isOpen: boolean;
}

export class FixedCreatePlanSubItemButton extends React.PureComponent<{}, State> {
  state: State = {
    actionName: '',
    isOpen: false,
  };

  onPressItem = (name?: string) => {
    const actionName = name || 'create-task';
    this.setState({
      actionName,
    });
  };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <FloatingAction
        color={this.state.isOpen ? palette.secondary : palette.primaryVariant}
        actions={actions}
        overlayColor={palette.modalBackgroundOverlay}
        onPressItem={this.onPressItem}
        floatingIcon={
          this.state.isOpen ? (
            <Icon name="close" type="material" color={palette.textWhite} size={32} />
          ) : (
            <Icon name="add" type="material" color={palette.secondary} size={32} />
          )
        }
        onOpen={this.onOpen}
        onClose={this.onClose}
      />
    );
  }
}
