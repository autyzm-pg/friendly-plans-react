import { Platform, StatusBar } from 'react-native';

export const statusBarHeight = Platform.select({
  android: StatusBar.currentHeight! - 24,
  ios: 0,
});

export const headerHeight = 56;
