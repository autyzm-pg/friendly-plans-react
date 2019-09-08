import { ViewStyle } from 'react-native';
import { palette } from './palette';

export const getElevation = (elevation: number): ViewStyle => ({
  elevation,
  shadowColor: palette.shadow,
  shadowOffset: {
    width: 0,
    height: Math.round(1 + elevation / 4),
  },
  shadowOpacity: 0.17 + elevation / 100,
  shadowRadius: 1 + elevation / 2,
});
