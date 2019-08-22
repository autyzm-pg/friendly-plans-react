import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import {Student} from '../../models';

interface Props {
  student: Student;
}

interface State {
  textCase?: string;
}

export class StudentTextCaseSettings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textCase: props.student.textCase,
    };
  }
  setCase = (caseState: string) => {
    this.props.student.update({
      textCase: caseState,
    });
    this.setState({ textCase: caseState });
  };

  setUpperCase = () => {
    this.setCase('uppercase');
  };
  setStandardCase = () => {
    this.setCase('standardcase');
  };

  render() {
    const { textCase } = this.state;
    return (
      <View>
        <StyledText style={styles.label}>
          {i18n.t('studentSettings:textCaseSettings')}
        </StyledText>
        <View style={styles.container}>
          <Button
            onPress={this.setUpperCase}
            title={i18n.t('studentSettings:textSettingsUpperCase')}
            containerStyle={styles.button}
            backgroundColor={textCase === 'uppercase' ? 'blue' : 'white'}
            type="outline"
          />
          <Button
            onPress={this.setStandardCase}
            title={i18n.t('studentSettings:textSettingsStandardCase')}
            containerStyle={styles.button}
            backgroundColor={textCase === 'standardcase' ? 'blue' : 'white'}
            type="outline"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  label: {
    color: palette.textBlack,
    ...typography.headline6,
  },
  button: {
    marginTop: 8,
  },
});
