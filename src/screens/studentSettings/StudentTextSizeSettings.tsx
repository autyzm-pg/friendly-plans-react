import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Card, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';

interface Props {
  student: Student;
}

interface State {
  textSize?: string;
}

export class StudentTextSizeSettings extends React.PureComponent {
  constructor(props: any) {
    super();
    this.state = {
      textSize: props.student.textSize,
    };
  }
  setSize = size => {
    this.props.student.update({
      textSize: size,
    });
    this.setState({ textSize: size });
  };

  setSizeS = () => {
    this.setSize('s');
  };
  setSizeM = () => {
    this.setSize('m');
  };
  setSizeL = () => {
    this.setSize('l');
  };
  setSizeXL = () => {
    this.setSize('xl');
  };

  render() {
    const { textSize } = this.state;
    return (
      <View>
        <StyledText style={styles.label}>
          {i18n.t('studentSettings:textSizeSettings')}
        </StyledText>
        <View style={styles.container}>
          <Button
            onPress={this.setSizeS}
            title={i18n.t('studentSettings:textSettingsSizeS')}
            containerStyle={styles.button}
            backgroundColor={textSize === 's' ? 'blue' : 'white'}
            titleColor={textSize === 's' ? 'white' : 'blue'}
            type="outline"
          />
          <Button
            onPress={this.setSizeM}
            title={i18n.t('studentSettings:textSettingsSizeM')}
            containerStyle={styles.button}
            backgroundColor={textSize === 'm' ? 'blue' : 'white'}
            titleColor={textSize === 'm' ? 'white' : 'blue'}
            type="outline"
          />
          <Button
            onPress={this.setSizeL}
            title={i18n.t('studentSettings:textSettingsSizeL')}
            containerStyle={styles.button}
            backgroundColor={textSize === 'l' ? 'blue' : 'white'}
            titleColor={textSize === 'l' ? 'white' : 'blue'}
            type="outline"
          />
          <Button
            onPress={this.setSizeXL}
            title={i18n.t('studentSettings:textSettingsSizeXL')}
            containerStyle={styles.button}
            backgroundColor={textSize === 'xl' ? 'blue' : 'white'}
            titleColor={textSize === 'xl' ? 'white' : 'blue'}
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
