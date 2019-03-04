import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { palette, typography } from 'styles';

export class CreateStudentButton extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight
        onPress={Student.create}
        underlayColor={palette.underlay}
        style={styles.touchable}
      >
        <View style={styles.container}>
          <Icon name="account-plus" iconStyle={styles.icon} />
          <StyledText style={styles.label}>
            {i18n.t('studentList:createStudent')}
          </StyledText>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    margin: 8,
    elevation: 1,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
  },
  container: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: palette.background,
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
