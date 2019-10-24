import { StyledText } from 'components';
import { i18n } from 'locale';
import React, { SFC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { dimensions, getElevation, palette, typography } from 'styles';

import { PlanNameText } from '../../components/PlanNameText';
import { StudentDisplayOption } from '../../models/Student';

interface Props {
  displaySettings: string;
  textSize: string;
  isUpperCase: boolean;
}

export const PlanDisplayPreview: SFC<Props> = ({ displaySettings, textSize, isUpperCase }) => {
  const renderImage = () => {
    if (displaySettings !== StudentDisplayOption.TextSlide && displaySettings !== StudentDisplayOption.TextList) {
      return <Image style={styles.planImage} source={require('../../assets/images/kids-playing.png')} />;
    }

    return null;
  };

  const renderText = () => {
    if (displaySettings !== StudentDisplayOption.LargeImageSlide) {
      return (
        <PlanNameText
          planName={i18n.t('studentSettings:planCardPlacehorder')}
          textSize={textSize}
          isUpperCase={isUpperCase}
          isSettingsPreview
        />
      );
    }

    return null;
  };

  const isListPreview =
    displaySettings === StudentDisplayOption.ImageWithTextList || displaySettings === StudentDisplayOption.TextList;

  const planCardStyles = [styles.planCard, isListPreview && styles.planCardList];
  const firstCardStyles = [...planCardStyles, styles.firstPlanCard, isListPreview && styles.firstPlanCardList];
  const secondCardStyles = [...planCardStyles, styles.secondPlanCard, isListPreview && styles.secondPlanCardList];

  return (
    <View style={styles.previewContainer}>
      <View style={firstCardStyles}>
        {renderImage()}
        <View style={styles.planText}>{renderText()}</View>
      </View>
      <View style={secondCardStyles}>
        {renderImage()}
        <View style={styles.planText}>{renderText()}</View>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: dimensions.spacingMedium,
  },
  planCardList: {
    paddingLeft: dimensions.spacingMedium,
    paddingRight: dimensions.spacingBig,
    paddingTop: dimensions.spacingBig,
  },
  firstPlanCard: {
    ...getElevation(4),
    marginTop: dimensions.spacingMedium,
    height: 210,
    width: 350,
    zIndex: 1,
  },
  firstPlanCardList: {
    flexDirection: 'row',
    height: 109,
  },
  secondPlanCard: {
    ...getElevation(3),
    height: 30,
    width: 320,
    translateY: -22,
  },
  secondPlanCardList: {
    flexDirection: 'row',
    height: 109,
    width: 350,
    marginTop: dimensions.spacingTiny,
    marginBottom: dimensions.spacingMedium,
    translateY: 0,
  },
  planText: {
    width: '70%',
  },
  planImage: {
    flex: 1,
    aspectRatio: 1,
  },
});
