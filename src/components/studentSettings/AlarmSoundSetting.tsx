import { IconButton, StyledText, ModalTrigger } from 'components';
import { i18n } from 'locale';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { dimensions, palette, typography } from 'styles';
import NotificationSounds, {playSampleSound} from "react-native-notification-sounds";
import {AlarmSoundSettingModal} from "./AlarmSoundSettingModal";

interface Props {
  value: string;
  onChange?: (value: boolean) => void;
  soundsList;
  handleClick: () => void;
  modalVisible: boolean;
}

export class AlarmSoundSetting extends React.PureComponent<Props> {

  render() {

      return(
      <View style={styles.container}>
        <StyledText style={styles.label}>{i18n.t('studentSettings:alarmSound')}</StyledText>
        <View style={styles.soundPickerContainer}>
          <StyledText style={styles.soundPicker}>{this.props.value}</StyledText>
          <IconButton onPress={() => this.props.handleClick()} name={this.props.modalVisible ? "chevron-left" : "chevron-right"} type="material" size={30} color={palette.textDisabled} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: dimensions.spacingMedium,
    height: 40,
  },
  label: {
    ...typography.subtitle,
    color: palette.textBody,
  },
  soundPicker: {
    ...typography.overline,
    color: palette.textDisabled,
    marginRight: dimensions.spacingBig,
  },
  soundPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
