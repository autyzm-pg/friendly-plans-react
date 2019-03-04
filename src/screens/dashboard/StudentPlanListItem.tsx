import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { IconButton, StyledText } from 'components';
import { Plan, Student } from 'models';
import { palette } from 'styles';

interface Props extends NavigationInjectedProps {
  plan: Plan;
  student: Student;
}

export class StudentPlanListItem extends React.PureComponent<Props> {
  navigateToUpdatePlan = () => {
    this.props.navigation.navigate('UpdatePlan', {
      plan: this.props.plan,
      student: this.props.student,
    });
  };

  render() {
    const { name } = this.props.plan;
    return (
      <View style={styles.container}>
        <StyledText>{name}</StyledText>
        <View style={styles.iconContainer}>
          <IconButton
            name="pencil"
            color={palette.secondary}
            size={28}
            containerStyle={styles.updateIcon}
            onPress={this.navigateToUpdatePlan}
          />
          <IconButton name="play-circle" size={30} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  updateIcon: {
    marginEnd: 12,
  },
  container: {
    width: '50%',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.backgroundDark,
    marginBottom: 16,
    marginEnd: 16,
    borderRadius: 12,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default withNavigation(StudentPlanListItem);
