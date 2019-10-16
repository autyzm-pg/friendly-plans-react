import { Formik, FormikProps } from 'formik';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Card, Icon, IconButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';

export interface PlanItemFormData {
  planItemName: string;
}

interface Props {
  onSubmit: (planItemFormData: PlanItemFormData) => Promise<void>;
  planItem?: PlanItem;
}

export const PlanItemForm: SFC<Props> = ({ planItem, onSubmit }) => {
  const initialValues: PlanItemFormData = {
    planItemName: planItem ? planItem.name : '',
  };

  const validationSchema = Yup.object().shape({
    planItemName: Yup.string().required(),
  });

  const renderFormControls = ({ values, setFieldValue, submitForm }: FormikProps<PlanItemFormData>) => {
    const handleChangeText = (value: string) => setFieldValue('planItemName', value);

    return (
      <>
        <View style={styles.subHeaderContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={i18n.t('planActivity:planNamePlaceholder')}
              value={values.planItemName}
              onChangeText={handleChangeText}
              onEndEditing={submitForm}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <IconButton name="layers" type="material" size={24} color={palette.primaryVariant} />
            <IconButton name="layers-clear" type="material" size={24} color={palette.primaryVariant} />
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
          <View style={styles.imagePickerContainer}>
            <View style={styles.imagePicker}>
              <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
            </View>
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
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    backgroundColor: palette.background,
    ...getElevation(5),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '40%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    marginLeft: dimensions.spacingSmall,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingHuge,
    height: '80%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: 12,
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
