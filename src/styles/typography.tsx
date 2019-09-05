/*
 * Try to always use following typography in your components.
 * This style is based on default Material Design typography.
 * https://material.io/design/typography/the-type-system.html#type-scale
 * */
import { StyleSheet } from 'react-native';

import { fonts } from './fonts';

export const typography = StyleSheet.create({
  headline1: {
    fontFamily: fonts.sansSerif.light,
    fontSize: 96,
    letterSpacing: -1.5,
  },
  headline2: {
    fontFamily: fonts.sansSerif.light,
    fontSize: 60,
    letterSpacing: -0.5,
  },
  headline3: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 48,
    letterSpacing: 0,
  },
  headline4: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 34,
    letterSpacing: 0.25,
  },
  headline5: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 24,
    letterSpacing: 0,
  },
  // used for header text, some bigger inputs
  headline6: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  // used for list item bigger text
  subtitle1: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 15,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  // used for some component texts
  body1: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  // used for input text, list item smaller text
  body2: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 13,
    letterSpacing: 0.25,
  },
  // used for buttons
  button: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 14,
    letterSpacing: 1.25,
  },
  // used for ayth input labels, errors
  caption: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 10,
    letterSpacing: 1.5,
  },
});
