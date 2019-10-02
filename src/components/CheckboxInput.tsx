import React from 'react';
import { StyleSheet, View } from 'react-native';

import { palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

export const icons = {
  checked: 'checkbox-marked-outline',
  unchecked: 'checkbox-blank-outline',
};

interface Props {
  checked: boolean;
  onPress: (value: boolean) => void;
  title?: string;
  children?: JSX.Element;
  error?: string;
}

export class CheckboxInput extends React.PureComponent<Props> {
  onPress = () => {
    const { checked, onPress } = this.props;
    onPress(!checked);
  };

  render() {
    const { checked, children, error, title } = this.props;
    return (
      <>
        <View style={styles.container}>
          <IconButton
            onPress={this.onPress}
            name={checked ? icons.checked : icons.unchecked}
            containerStyle={styles.iconContainer}
          />
          {title && (
            <View style={styles.contentContainer}>
              <StyledText style={styles.label}>{title}</StyledText>
              {children}
            </View>
          )}
        </View>
        {!!error && (
          <View style={styles.errorContainer}>
            <StyledText style={styles.error}>{error}</StyledText>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: palette.textBlack,
  },
  iconContainer: {
    height: 36,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    height: 20,
    justifyContent: 'center',
  },
  error: {
    ...typography.caption,
    color: palette.error,
  },
});
