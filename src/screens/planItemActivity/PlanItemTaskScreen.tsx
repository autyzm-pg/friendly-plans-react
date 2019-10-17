import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, FullScreenTemplate, Icon, IconButton, IconToggleButton, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { dimensions, getElevation, palette, typography } from 'styles';
import { PlanItemComplexTask } from './PlanItemComplexTask';
import { PlanItemSimpleTask } from './PlanItemSimpleTask';

interface State {
  planItem: PlanItem;
  taskType: PlanItemType;
}

export class PlanItemTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  state: State = {
    planItem: this.props.navigation.getParam('planItem') ? this.props.navigation.getParam('planItem') : new PlanItem(),
    taskType: this.props.navigation.getParam('planItem')
      ? this.props.navigation.getParam('planItem').type
      : PlanItemType.SimpleTask,
  };

  handleChangeText = (name: string) => {
    this.setState({
      planItem: { ...this.state.planItem, name },
    });
  };

  changePlanItemType = (isSimpleTask: boolean) => {
    this.setState({
      taskType: isSimpleTask ? PlanItemType.SimpleTask : PlanItemType.ComplexTask,
    });
  };

  render() {
    const { planItem, taskType } = this.state;
    return (
      <FullScreenTemplate darkBackground>
        <View style={styles.subHeaderContainer}>
          <View>
            <StyledText style={styles.textInput}>{i18n.t('planItemActivity:taskNamePlaceholder')}</StyledText>
          </View>
          <View style={styles.buttonsContainer}>
            <IconToggleButton icons={['layers-clear', 'layers']} onPress={this.changePlanItemType} />
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
          {taskType === PlanItemType.SimpleTask ? (
            <PlanItemSimpleTask planItem={planItem} />
          ) : (
            <PlanItemComplexTask planItem={planItem} />
          )}
        </Card>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.spacingExtraLarge,
    backgroundColor: palette.background,
    ...getElevation(5),
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    ...typography.subtitle,
    color: palette.textInputPlaceholder,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingExtraLarge,
    height: '78%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
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
    marginTop: dimensions.spacingSmall,
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
