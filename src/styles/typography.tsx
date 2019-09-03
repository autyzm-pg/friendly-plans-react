/*
 * Try to always use following typography in your components.
 * This style is based on default Material Design typography.
 * https://material.io/design/typography/the-type-system.html#type-scale
 * */
import { StyleSheet } from 'react-native';

import { fonts } from './fonts';

interface TypographyEntry {
  fontFamily: string;
  fontSize: number;
  letterSpacing: number;
}

interface Typography {
  headline1: TypographyEntry;
  headline2: TypographyEntry;
  headline3: TypographyEntry;
  headline4: TypographyEntry;
  headline5: TypographyEntry;
  headline6: TypographyEntry;
  subtitle1: TypographyEntry;
  subtitle2: TypographyEntry;
  body1: TypographyEntry;
  body2: TypographyEntry;
  button: TypographyEntry;
  caption: TypographyEntry;
  overline: TypographyEntry;
}

export const typography: Typography = StyleSheet.create({
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
