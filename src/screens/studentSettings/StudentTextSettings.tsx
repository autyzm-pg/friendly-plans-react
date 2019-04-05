import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Card, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';

interface Props {
  student: Student;
}

interface State {
  textCapitalization?: string;
}

export class StudentTextSettings extends React.PureComponent {
  setUpperCase = () => {
    console.warn('upper');
    this.props.student.update({
      textCapitalization: 'uppercase',
    });
    this.setState({ textCapitalization: 'uppercase' });
  };
  
  setStandardCase = () => {
    console.warn('standard');
    this.props.student.update({
      textCapitalization: 'standardcase',
    });
    this.setState({ textCapitalization: 'standardcase' });
  };

  constructor(props: any) {
    super();
    this.state = {
      textCapitalization: props.student.textCapitalization,
    }
  }

  render() {
    const { textCapitalization } = this.state;
    return (
    <View>
      <StyledText style={styles.label}>
        {i18n.t('studentSettings:textSettings')}
      </StyledText>
      <View style={styles.container}>
        <Button
          onPress={this.setUpperCase}
          title={i18n.t('studentSettings:textSettingsUpperCase')}
          containerStyle={styles.button}
          backgroundColor={textCapitalization === 'uppercase' ? 'blue' : 'white'}
          titleColor={textCapitalization === 'uppercase' ? 'white' : 'blue'}
          type='outline'
        />
        <Button
          onPress={this.setStandardCase}
          title={i18n.t('studentSettings:textSettingsStandardCase')}
          containerStyle={styles.button}
          backgroundColor={textCapitalization === 'standardcase' ? 'blue' : 'white'}
          titleColor={textCapitalization === 'standardcase' ? 'white' : 'blue'}
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
