import { StyleSheet } from 'react-native';

import { palette } from './palette';
import { typography } from './typography';

export const headerStyle = StyleSheet.create({
  headerText: {
    ...typography.headline6,
    color: palette.textWhite,
  },
  header: {
    backgroundColor: palette.primary,
  },
});
