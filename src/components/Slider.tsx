import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { default as SliderRN } from '@react-native-community/slider'; // tslint:disable-line

interface Props {
  min: number;
  max: number;
  handleSliding: (time: number) => void;
}

export const Slider: FC<Props> = ({ min, max, handleSliding }) => (
  <View style={styles.sliderContainer}>
    <Text>{min}</Text>
    <SliderRN style={styles.slider} minimumValue={min} maximumValue={max} onValueChange={handleSliding} step={1} />
    <Text>{max}</Text>
  </View>
);

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: '80%',
    height: 40,
  },
});
