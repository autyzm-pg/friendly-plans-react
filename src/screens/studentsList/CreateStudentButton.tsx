import { Button } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { palette } from 'styles';

interface Props {
  onPress: () => void;
}

export class CreateStudentButton extends React.PureComponent<Props> {
  render() {
    return (
      <Button
        title={i18n.t('studentList:createStudent')}
        icon={{
          name: 'account-plus',
          type: 'material-community',
          color: palette.textWhite,
          size: 20,
        }}
        isUppercase
        onPress={this.props.onPress}
      />
    );
  }
}
