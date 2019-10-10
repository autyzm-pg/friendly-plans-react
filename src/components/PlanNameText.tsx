import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';

import { StyledText } from 'components';
import { palette, typography } from 'styles';

interface Props {
  planName: string;
  textSize: string;
  isUpperCase?: boolean;
  isSettingsPreview?: boolean;
}

const planNameTypography = {
  studentView: {
    xl: typography.headline1,
    l: typography.headline2,
    m: typography.headline3,
    s: typography.headline4,
  },
  settingsPreview: {
    xl: typography.headline3,
    l: typography.headline4,
    m: typography.headline5,
    s: typography.headline6,
  },
};

export const PlanNameText: SFC<Props> = ({
  planName,
  textSize,
  isUpperCase = false,
  isSettingsPreview = false,
}) => {
  const getTypography = () => {
    if (isSettingsPreview) {
      return planNameTypography.settingsPreview[textSize];
    }

    return planNameTypography.studentView[textSize];
  };

  const getPlanDisplayName = () => (isUpperCase ? planName.toUpperCase() : planName);

  return <StyledText style={[styles.planNameText, getTypography()]}>{getPlanDisplayName()}</StyledText>;
};

const styles = StyleSheet.create({
  planNameText: {
    color: palette.textBody,
    textAlign: 'center',
  },
});
