import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Icon, IconButton } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { NavigationService } from 'services';
import { palette, typography } from 'styles';
import { CreatePlanButton } from './CreatePlanButton';
import { StudentPlanList } from './StudentPlanList';

interface Props {
  student: Student;
}

interface State {
  name: string;
}

export class StudentListItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.student.name,
    };
  }

  handleNameChange = (name: string) => this.setState({ name });

  updateStudentName = () =>
    this.props.student.update({
      name: this.state.name,
    });

  removeStudent = () => {
    NavigationService.navigate('Dialog', {
      title: i18n.t('studentList:removeStudentTitle'),
      description: i18n.t('studentList:removeStudentDescription', {
        name: this.props.student.name,
      }),
      buttonTitle: i18n.t('common:yes'),
      onPress: () => this.props.student.delete(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Icon name="account" iconStyle={styles.icon} />
          <TextInput
            value={this.state.name}
            style={styles.input}
            onEndEditing={this.updateStudentName}
            onChangeText={this.handleNameChange}
            underlineColorAndroid={palette.primaryDark}
          />
          <IconButton
            onPress={this.removeStudent}
            name="close"
            iconStyle={styles.actionIcon}
          />
        </View>
        <StudentPlanList student={this.props.student} />
        <CreatePlanButton student={this.props.student} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    elevation: 1,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    backgroundColor: palette.background,
    padding: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 48,
    marginEnd: 32,
  },
  actionIcon: {
    fontSize: 36,
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
