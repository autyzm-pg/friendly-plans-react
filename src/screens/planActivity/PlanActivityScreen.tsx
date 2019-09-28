import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Formik } from 'formik';
import { i18n } from 'locale';
import { Plan } from 'models';
import { dimensions, getElevation, palette } from 'styles';
import { FullScreenTemplate } from '../../components';
import { TaskButtons } from './TaskButtons';

interface State {
  disabled?: boolean;
}

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    disabled: true,
  };

  handleEndEditing = (text: string) => {
    const { id } = this.props.navigation.getParam('student');
    Plan.create(id, text).then(() => this.setState({ disabled: false }));
  };

  render() {
    const plan = new Plan();

    return (
      <FullScreenTemplate darkBackground>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Cos tam</Text>
          </View>
          <TaskButtons disabled={this.state.disabled} plan={plan} />
        </View>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    backgroundColor: palette.background,
    ...getElevation(5),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '40%',
  },
});

/*
           {this.state.disabled ?
              <PlanInput onEndEditing={this.handleEndEditing.bind(this)} /> :
              <StyledText>Cośtam</StyledText>
            }
*/
