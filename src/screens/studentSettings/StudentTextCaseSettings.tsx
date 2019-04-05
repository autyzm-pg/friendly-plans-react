import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Card, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';

interface Props {
  student: Student;
}

interface State {
  textCase?: string;
}

export class StudentTextCaseSettings extends React.PureComponent {
  
  setCase = (caseState) => {
    this.props.student.update({
      textCase: caseState,
    });
    this.setState({ textCase: caseState });
  };

  setUpperCase = () => { this.setCase('uppercase') };
  setStandardCase = () => { this.setCase('standardcase') };

  constructor(props: any) {
    super();
    this.state = {
      textCase: props.student.textCase,
    }
  }

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
          titleColor={textCase === 'uppercase' ? 'white' : 'blue'}
          type='outline'
        />
        <Button
          onPress={this.setStandardCase}
          title={i18n.t('studentSettings:textSettingsStandardCase')}
          containerStyle={styles.button}
          backgroundColor={textCase === 'standardcase' ? 'blue' : 'white'}
          titleColor={textCase === 'standardcase' ? 'white' : 'blue'}
          type='outline'
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
