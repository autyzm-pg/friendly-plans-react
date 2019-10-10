/*
 * Try to always use following typography in your components.
 * Use spread ... operator to merge local component styles with typography
 * */
import { StyleSheet } from 'react-native';

import { fonts } from './fonts';

export const typography = StyleSheet.create({
  // TODO Precise the headline sizes in settings plan card preview and student view
  headline1: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 48,
    letterSpacing: 0,
  },
  headline2: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 34,
    letterSpacing: 0,
  },
  headline3: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 18,
    letterSpacing: 0,
  },
  headline4: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 16,
    letterSpacing: 0,
  },
  headline5: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 14,
    letterSpacing: 0,
  },
  headline6: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 12,
    letterSpacing: 0,
  },
  // used for view header
  title: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 18,
    letterSpacing: 0,
  },
  // used for list item bigger text
  subtitle: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 16,
    letterSpacing: 0,
  },
  // used for buttons
  button: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 14,
    letterSpacing: 0,
  },
  // used for some component texts
  body: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 14,
    letterSpacing: 0,
  },
  // used for auth input labels, errors
  caption: {
    fontFamily: fonts.sansSerif.medium,
    fontSize: 12,
    letterSpacing: 0,
  },
  overline: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 12,
    letterSpacing: 0,
  },
  // used for input in simple task
  taskInput: {
    fontFamily: fonts.sansSerif.regular,
    fontSize: 20,
    letterSpacing: 0,
  },
});
