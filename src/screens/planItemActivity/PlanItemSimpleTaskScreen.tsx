import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, Icon, IconButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { dimensions, getElevation, palette, typography } from 'styles';
import { SwitchIconButton } from './SwitchIconButton';

interface State {
  planItem: PlanItem;
}

export class PlanItemSimpleTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  state: State = {
    planItem: this.props.navigation.getParam('planItem') ? this.props.navigation.getParam('planItem') : new PlanItem(),
  };

  handleChangeText = (name: string) => {
    this.setState({
      planItem: { ...this.state.planItem, name },
    });
  };

  render() {
    const { planItem } = this.state;
    return (
      <>
        <View style={styles.subHeaderContainer}>
          <View>
            <TextInput
              placeholder={i18n.t('planActivity:planNamePlaceholder')}
              value={planItem.name}
              onChangeText={this.handleChangeText}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <SwitchIconButton firstIconName="layers" secondIconName="layers-clear" />
            <IconButton
              name="mic-off"
              type="material"
              size={24}
              color={palette.primaryVariant}
              containerStyle={styles.iconButtonContainer}
            />
          </View>
        </View>
        <Card style={styles.card}>
          <View style={styles.imagePickerContainer}>
            <View style={styles.imagePicker}>
              <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
            </View>
            <StyledText style={styles.imageInputText}>{i18n.t('planItemActivity:taskNameForChild')}</StyledText>
          </View>
          <View style={styles.timerButton}>
            <IconButton
              name="alarm-off"
              type="material"
              label={i18n.t('planItemActivity:timerButton')}
              containerStyle={styles.iconButtonContainer}
              size={24}
              color={palette.primaryVariant}
            />
          </View>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    backgroundColor: palette.background,
    ...getElevation(5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    marginLeft: dimensions.spacingSmall,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingHuge,
    height: '80%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  imagePicker: {
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    borderWidth: 1,
    display: 'flex',
    paddingHorizontal: 91,
    paddingVertical: 67,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInputText: {
    ...typography.taskInput,
    color: palette.textInputPlaceholder,
    marginTop: 53,
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
});
