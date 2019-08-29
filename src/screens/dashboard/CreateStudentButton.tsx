import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Card, Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { palette, typography } from 'styles';
import {StudentRepository} from '../../models/repository/StudentRepository';

export class CreateStudentButton extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight
        onPress={StudentRepository.create}
        underlayColor={palette.underlay}
        style={styles.touchable}
      >
        <Card style={styles.container}>
          <Icon name="account-plus" iconStyle={styles.icon} />
          <StyledText style={styles.label}>
            {i18n.t('studentList:createStudent')}
          </StyledText>
        </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    margin: 8,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  icon: {
    fontSize: 48,
    marginEnd: 32,
  },
  label: {
    color: palette.textBlack,
    ...typography.headline6,
  },
});
