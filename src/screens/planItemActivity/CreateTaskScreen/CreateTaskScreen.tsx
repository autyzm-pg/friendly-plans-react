import { Formik, FormikActions, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { IconButton, IconToggleButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemComplexFormData, PlanItemType } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';
import { ComplexTask } from './ComplexTask/ComplexTask';
import { SimpleTask } from './SimpleTask/SimpleTask';
import TaskHeaderForm from './TaskHeaderForm';

export interface PlanItemFormData {
  name: string;
  time: number;
  nameForChild: string;
  taskType: PlanItemType;
}

interface Props {
  onSubmit: (formData: PlanItemFormData, subtaskArrayIndex?: number) => Promise<void>;
  planItem: PlanItem;
  taskNumber: number;
  onTitleUpdated: (name: string) => void;
  onSubtask: (formData: PlanItemFormData, order: number) => void;
}

export const CreateTaskScreen = (props: Props) => {
  const initialValues: PlanItemFormData = {
    name: props.planItem ? props.planItem.name : `${i18n.t('planItemActivity:newTask')}${props.taskNumber}`,
    nameForChild: props.planItem ? props.planItem.nameForChild : '',
    time: props.planItem ? props.planItem.time : 0,
    taskType: props.planItem ? props.planItem.type : PlanItemType.SimpleTask,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    nameForChild: Yup.string(),
    time: Yup.number(),
  });

  const handleComplexForm = (values: PlanItemComplexFormData) => {
    props.planItem.update({
      name: values.name,
      time: values.time,
    });
  };

  const handleSimpleForm = (values: PlanItemFormData) => {
    props.onTitleUpdated(values.name);
    props.onSubmit(values);
  };

  const createSubtask = (values: PlanItemFormData, order: number) => {
    props.onSubtask(values, order);
  };

  const handleTypeChange = (formikProps: FormikProps<PlanItemFormData>) => (type: PlanItemType) => {
    formikProps.values.taskType = type;
    formikProps.submitForm();
  };

  const handleTitleChange = (formikProps: FormikProps<PlanItemFormData>) => (title: string) => {
    formikProps.values.name = title;
    formikProps.submitForm();
  };

  const handleHeaderSubmit = (formikProps: FormikProps<PlanItemFormData>) => async (values: any) => {
    formikProps.values.name = values.name;
    formikProps.values.taskType = values.taskType;

    if (values.taskType === PlanItemType.SimpleTask) {
      props.planItem.deleteAllSubtasks();
    } else if (values.taskType === PlanItemType.ComplexTask) {
      const snap = await props.planItem.getChildCollectionRef().get();
      props.onSubtask(initialValues, snap.size);
    }

    formikProps.submitForm();
  };

  const renderForm = (formikProps: FormikProps<PlanItemFormData>) => (
    <>
      <TaskHeaderForm
        onTitleChange={handleTitleChange(formikProps)}
        onTaskTypeChange={handleTypeChange(formikProps)}
        title={props.planItem ? props.planItem.name : ''}
        taskType={props.planItem ? props.planItem.type : PlanItemType.SimpleTask}
        taskNumber={props.taskNumber}
        isSimple={props.planItem ? props.planItem.isSimpleTask() : true}
        onSubmit={handleHeaderSubmit(formikProps)}
      />
      {formikProps.values.taskType === PlanItemType.SimpleTask && (
        <SimpleTask
          planItem={props.planItem}
          taskNumber={props.taskNumber}
          style={styles.simpleTaskContainer}
          formikProps={formikProps}
        />
      )}
      {formikProps.values.taskType === PlanItemType.ComplexTask && props.planItem && (
        <ComplexTask
          planItem={props.planItem}
          onSubmit={handleComplexForm}
          taskNumber={0}
          onCreateSubtask={createSubtask}
        />
      )}
    </>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSimpleForm}
      render={renderForm}
    />
  );
};

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
