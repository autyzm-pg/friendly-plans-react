import React, { SFC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Slider } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';

interface Props {
  min: number;
  max: number;
  closeModal?: () => void;
  onConfirm?: (time: number) => void;
}

export const TimeSlider: SFC<Props> = ({ min, max, closeModal, onConfirm }) => {
  const [timer, setTimer] = useState(1);
  const handleSliding = (time: number) => setTimer(time);
  const handleConfirmPressed = () => {
    if (onConfirm) {
      onConfirm(timer);
    }
    if (closeModal) {
      closeModal();
    }
  };
  return (
    <>
      <Slider min={min} max={max} handleSliding={handleSliding} />
      <Text style={styles.time}>{timer}</Text>
      <View style={styles.timeSlider}>
        <TouchableOpacity onPress={closeModal}>
          <Text>{i18n.t('common:cancel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleConfirmPressed}>
          <Text style={styles.confirmButton}>{i18n.t('common:confirm')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeSlider: { flexDirection: 'row', alignSelf: 'flex-end' },
  confirmButton: { color: palette.textBody, marginLeft: 8 },
  time: {
    alignSelf: 'center',
  },
});
