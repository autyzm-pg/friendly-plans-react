import { StyledText } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { dimensions, getElevation, palette, typography } from 'styles';

export const PlanDisplayPreview = () => {
  return (
    <View style={styles.previewContainer}>
      <View style={[styles.planCard, styles.frontPlanCard]}>
        <Image style={styles.planImage} source={require('../../assets/images/kids-playing.png')} />
        <StyledText style={styles.planText}>{i18n.t('studentSettings:planCardPlacehorder')}</StyledText>
      </View>
      <View style={[styles.planCard, styles.beneathPlanCard]} />
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    width: '100%',
    marginTop: dimensions.spacingTiny,
    marginBottom: dimensions.spacingLarge,
    borderRadius: 8,
    backgroundColor: palette.backgroundAdditional,
    alignItems: 'center',
  },
  planCard: {
    backgroundColor: palette.background,
    borderRadius: dimensions.spacingMedium,
  },
  frontPlanCard: {
    ...getElevation(4),
    paddingBottom: dimensions.spacingBig,
    marginTop: dimensions.spacingMedium,
    alignItems: 'center',
    width: 350,
    zIndex: 1,
  },
  beneathPlanCard: {
    ...getElevation(3),
    height: 30,
    width: 320,
    backgroundColor: palette.background,
    translateY: -22,
  },
  planText: {
    ...typography.body,
    color: palette.textBody,
  },
  planImage: {
    height: 175,
    width: 210,
  },
});
