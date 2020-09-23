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
}

interface State {
  modalVisible?: boolean;
  soundsList;
}

export class AlarmSoundSetting extends React.PureComponent<Props, State> {
  
  constructor(props){
    super(props);
 
    this.state = {
       modalVisible: false,
    }
 }

 handleClick = () => {
  //NotificationSounds.getNotifications('notification').then(soundsList => {
    
  //  playSampleSound(soundsList[1]);
  //  this.setState({soundsList: soundsList});
  //  console.log('SOUNDS', JSON.stringify(this.state.soundsList));
  //  this.setState({modalVisible: true});
  //})

  NotificationSounds.getNotifications('notification').then(soundsList  => {
    //console.warn('SOUNDS', JSON.stringify(soundsList));
    /*
    Play the notification sound.
    pass the complete sound object.
    This function can be used for playing the sample sound
    */
    //playSampleSound(soundsList[1]);
    // if you want to stop any playing sound just call:
    // stopSampleSound();
    this.setState({soundsList: soundsList});
    this.setState({modalVisible: true});
});
}

  render() {

      return(
      <View style={styles.container}>
        <StyledText style={styles.label}>{i18n.t('studentSettings:alarmSound')}</StyledText>
        <View style={styles.soundPickerContainer}>
          <StyledText style={styles.soundPicker}>{this.props.value}</StyledText>
          <IconButton onPress={() => this.handleClick()} name="chevron-right" type="material" size={30} color={palette.textDisabled} />
        </View>
        {this.state.modalVisible && <AlarmSoundSettingModal soundsList={this.state.soundsList}></AlarmSoundSettingModal>}
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
