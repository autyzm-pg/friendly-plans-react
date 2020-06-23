import { Formik, FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { IconButton, IconToggleButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItemType } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';

interface Props {
  isSimple: boolean;
  taskNumber: number;
  title: string;
  taskType: PlanItemType;
  onTitleChange: (title: string) => void;
  onTaskTypeChange: (type: PlanItemType) => void;
  onSubmit: (values: PlanItemHeaderFormData) => void;
}

interface PlanItemHeaderFormData {
  name: string;
  taskType: PlanItemType;
}

const TaskHeaderForm = (props: Props) => {
  const initialValues: PlanItemHeaderFormData = {
    name: props.title ? props.title : `${i18n.t('planItemActivity:newTask')}${props.taskNumber}`,
    taskType: props.taskType ? props.taskType : PlanItemType.SimpleTask,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    nameForChild: Yup.string(),
    time: Yup.number(),
  });

  const changePlanItemType = (formikProps: FormikProps<PlanItemHeaderFormData>) => async (simpleTask: boolean) => {
    const type = simpleTask ? PlanItemType.SimpleTask : PlanItemType.ComplexTask;
    formikProps.values.taskType = type;
    formikProps.submitForm();
  };

  const submitForm = (values: PlanItemHeaderFormData) => {
    props.onSubmit(values);
  };

  const handleEndEditing = (values: any) => () => {
    props.onTitleChange(values.name);
  };

  const renderForm = (formikProps: FormikProps<PlanItemHeaderFormData>) => {
    const { values, handleChange, errors, touched } = formikProps;
    return (
      <>
        <View style={styles.subHeaderContainer}>
          <View>
            <TextInput
              style={styles.textInputContainer}
              textStyle={styles.textInput}
              placeholder={i18n.t('planItemActivity:taskNamePlaceholder')}
              value={values.name}
              onChangeText={handleChange('name')}
              onEndEditing={handleEndEditing(values)}
            />
            {errors.name && touched.name && <StyledText style={styles.errorMessage}>{errors.name}</StyledText>}
          </View>
          <View style={styles.buttonsContainer}>
            <IconToggleButton
              iconNames={['layers-clear', 'layers']}
              onPress={changePlanItemType(formikProps)}
              secondButtonOn={!props.isSimple}
            />
            <IconButton
              name="mic-off"
              type="material"
              size={24}
              color={palette.primaryVariant}
              containerStyle={styles.iconButtonContainer}
            />
          </View>
        </View>
      </>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      render={renderForm}
    />
  );
};

export default TaskHeaderForm;

const styles = StyleSheet.create({
  subHeaderContainer: {
    ...getElevation(5),
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.spacingHuge,
    backgroundColor: palette.background,
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
  },
  textInputContainer: {
    width: 288,
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  simpleTaskContainer: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: palette.backgroundSurface,
    paddingHorizontal: dimensions.spacingHuge,
    paddingTop: dimensions.spacingBig,
    paddingBottom: dimensions.spacingHuge,
  },
  errorMessage: {
    color: palette.error,
  },
});
