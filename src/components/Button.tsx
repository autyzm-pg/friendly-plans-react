import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ElementsButton, ButtonProps } from 'react-native-elements';

import { palette, typography } from 'styles';

interface Props extends ButtonProps {
  backgroundColor?: string;
}

// @ts-ignore
export const Button: React.FunctionComponent<Props> = ({
  backgroundColor,
  ...props
}) => (
  <ElementsButton
    {...props}
    buttonStyle={[styles.button, { backgroundColor }, props.buttonStyle]}
    titleStyle={[styles.title, props.titleStyle]}
  />
);

Button.defaultProps = {
  backgroundColor: palette.primary,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 21,
    elevation: 0,
    height: 44,
  },
  title: {
    ...typography.button,
    color: palette.textWhite,
  },
});
