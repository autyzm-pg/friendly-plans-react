import { i18n } from 'locale';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { palette } from 'styles';
import { StyledText } from '../../components';
import { CopyPlanButton } from './CopyPlanButton';
import { CreatePlanButton } from './CreatePlanButton';

export class EmptyStudentPlans extends React.PureComponent<NavigationInjectedProps> {
  navigate = () => {
    this.props.navigation.navigate('PlanActivity');
  };

  render() {
    return (
      <View style={styles.container}>
        <CreatePlanButton onPress={this.navigate} />
        <StyledText style={styles.text}>{i18n.t('planList:conjunction')}</StyledText>
        <CopyPlanButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.backgroundSurface,
  },
  text: {
    color: palette.primaryLight,
  },
});

export default withNavigation(EmptyStudentPlans);
