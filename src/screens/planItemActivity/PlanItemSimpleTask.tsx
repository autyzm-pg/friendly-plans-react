import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, IconButton, TextInput } from 'components';
import { FormikProps } from 'formik';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, palette, typography } from 'styles';
import { PlanItemFormData } from './PlanItemForm';

interface Props {
  planItem: PlanItem;
  formikProps: FormikProps<PlanItemFormData>;
}

export class PlanItemSimpleTask extends React.PureComponent<Props> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  render() {
    const { values, handleChange, submitForm } = this.props.formikProps;
    return (
      <>
        <View style={styles.imagePickerContainer}>
          <View style={styles.imagePicker}>
            <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
          </View>
          <TextInput
            style={styles.imageInputTextContainer}
            textStyle={styles.imageInputText}
            placeholder={i18n.t('planItemActivity:taskNameForChild')}
            value={values.nameForChild}
            onChangeText={handleChange('nameForChild')}
            onEndEditing={submitForm}
          />
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
  imagePicker: {
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    borderWidth: 1,
    display: 'flex',
    paddingHorizontal: 91,
    paddingVertical: 67,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.spacingSmall,
  },
  imageInputTextContainer: {
    marginTop: 53,
    width: 260,
  },
  imageInputText: {
    ...typography.taskInput,
    textAlign: 'center',
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
});
