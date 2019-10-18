import { Formik, FormikProps } from 'formik';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Card, IconButton, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';
import { PlanItemSimpleTask } from './PlanItemSimpleTask';

export interface PlanItemFormData {
  name: string;
}

interface Props {
  onSubmit: (formData: PlanItemFormData) => Promise<void>;
  planItem: PlanItem;
}

export const PlanItemForm: SFC<Props> = ({ planItem, onSubmit }) => {
  const initialValues: PlanItemFormData = {
    name: planItem ? planItem.name : '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const renderFormControls = ({ values, handleChange, submitForm }: FormikProps<PlanItemFormData>) => {
    return (
      <>
        <View style={styles.subHeaderContainer}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder={i18n.t('planItemActivity:taskNamePlaceholder')}
              value={values.name}
              onChangeText={handleChange('name')}
              onEndEditing={submitForm}
            />
          </View>
          <View style={styles.buttonsContainer}>
            {/* <IconToggleButton icons={['layers-clear', 'layers']} onPress={this.changePlanItemType} /> */}
            <IconButton
              name="mic-off"
              type="material"
              size={24}
              color={palette.primaryVariant}
              containerStyle={styles.iconButtonContainer}
            />
          </View>
        </View>
        <Card style={styles.card}>
          {/* {taskType === PlanItemType.SimpleTask ? (
            <PlanItemSimpleTask planItem={planItem} />
          ) : (
            <PlanItemComplexTask planItem={planItem} />
          )} */}
          <PlanItemSimpleTask planItem={planItem} />
        </Card>
      </>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={renderFormControls}
    />
  );
};

const styles = StyleSheet.create({
  subHeaderContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.spacingExtraLarge,
    backgroundColor: palette.background,
    ...getElevation(5),
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    ...typography.subtitle,
    color: palette.textInputPlaceholder,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingExtraLarge,
    height: '78%',
  },
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
