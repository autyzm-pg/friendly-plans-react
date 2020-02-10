import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';
import { Button as ElementsButton, ButtonProps } from 'react-native-elements';

import { dimensions, palette, typography } from 'styles';

interface Props extends ButtonProps {
  backgroundColor?: string;
  isUppercase?: boolean;
}

export const Button: SFC<Props> = ({ backgroundColor, isUppercase, icon, ...props }) => (
  <ElementsButton
    {...props}
    icon={icon}
    buttonStyle={[styles.button, !!icon && styles.buttonWithIcon, { backgroundColor }, props.buttonStyle]}
    titleStyle={[styles.title, !!icon && styles.titleWithIcon, isUppercase && styles.uppercase, props.titleStyle]}
  />
);

Button.defaultProps = {
  backgroundColor: palette.primary,
};

Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    borderRadius: dimensions.spacingMedium,
    elevation: 0,
    height: 36,
  },
  buttonWithIcon: {
    paddingRight: dimensions.spacingMedium,
  },
  title: {
    ...typography.button,
    color: palette.textWhite,
  },
  titleWithIcon: {
    marginLeft: 3,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});
