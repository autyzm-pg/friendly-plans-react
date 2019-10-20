import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, palette, typography } from 'styles';
import ImagePicker from './ImagePicker';

interface Props {
  planItem: PlanItem;
}

export class PlanItemSimpleTask extends React.PureComponent<Props> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  render() {
    const { planItem } = this.props;
    return (
      <>
        <View style={styles.imagePickerContainer}>
          <ImagePicker planItem={planItem} />
          <StyledText style={styles.imageInputText}>{i18n.t('planItemActivity:taskNameForChild')}</StyledText>
        </View>
        <View style={styles.timerButton}>
          <IconButton
            name="alarm-off"
            type="material"
            label={i18n.t('planItemActivity:timerButton')}
            containerStyle={styles.iconButtonContainer}
            size={24}
            color={palette.primaryVariant}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.spacingSmall,
  },
  imageInputText: {
    ...typography.taskInput,
    color: palette.textInputPlaceholder,
    marginTop: 53,
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
});
