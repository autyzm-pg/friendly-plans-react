import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Icon, IconButton } from 'components';
import { i18n } from 'locale';
import { Plan } from 'models';
import { NavigationService } from 'services';
import { palette, typography } from 'styles';

interface Props {
  plan: Plan;
}

interface State {
  name: string;
}

export class PlanHeader extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.plan.name,
    };
  }

  handleNameChange = (name: string) => this.setState({ name });

  updatePlanName = () =>
    this.props.plan.update({
      name: this.state.name,
    });

  deletePlan = () => {
    NavigationService.navigate('Dialog', {
      title: i18n.t('updatePlan:removePlanTitle'),
      description: i18n.t('updatePlan:removePlanDescription', {
        name: this.props.plan.name,
      }),
      buttonTitle: i18n.t('common:yes'),
      onPress: () => {
        this.props.plan.delete();
        NavigationService.goBack();
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name="database" size={32} iconStyle={styles.icon} />
        <TextInput
          value={this.state.name}
          style={styles.input}
          onEndEditing={this.updatePlanName}
          onChangeText={this.handleNameChange}
          underlineColorAndroid={palette.primaryDark}
        />
        <IconButton onPress={this.deletePlan} name="close" size={36} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  studentName: {
    ...typography.headline6,
  },
  icon: {
    marginEnd: 12,
  },
  input: {
    height: 42,
    ...typography.headline6,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
    marginEnd: 120,
  },
});
