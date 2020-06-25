import { Formik, FormikProps } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemComplexFormData, PlanItemFormData, PlanItemType } from 'models';
import { dimensions, palette } from 'styles';
import { SimpleTask } from '../SimpleTask/SimpleTask';
import { ComplexTaskAddButton } from './ComplexTaskAddButton';
import { ComplexTaskItem } from './ComplexTaskItem';

interface Props {
  planItem: PlanItem;
  onSubmit: (values: PlanItemComplexFormData) => void;
  onCreateSubtask: (values: PlanItemFormData, order: number) => void;
  taskNumber: number;
}

export const ComplexTask: FC<Props> = ({ planItem, onSubmit, taskNumber, onCreateSubtask }) => {
  const [selectedPlanItem, setSelectedPlanItem] = useState<PlanItem>();
  const [subitems, setSubitems] = useState<PlanItem[]>([]);
  const [noSubitems, setNoSubitems] = useState<boolean>(false);

  useEffect(() => {
    if (planItem) {
      planItem.getChildCollectionRef().onSnapshot(async () => {
        fetchSubtasks().then(result => {
          setSubitems(result);

          if (result.length > 0) {
            setSelectedPlanItem(result[result.length - 1]);
            setNoSubitems(false);
          } else {
            setNoSubitems(true);
          }
        });
      });
    }
  }, []);

  const calculateTime = () => {
    let time = 0;
    subitems.forEach(item => {
      time += item.time;
    });
    return time;
  };

  const addNewTask = () => {
    onCreateSubtask(subtaskInitData, subitems.length);
  };

  const fetchSubtasks = (): Promise<PlanItem[]> => {
    return planItem.getSubtasks();
  };

  const handleSubmit = (values: PlanItemFormData) => {
    if (selectedPlanItem) {
      selectedPlanItem
        .update({
          nameForChild: values.nameForChild,
          time: values.time,
        })
        .then(() => {
          onSubmit({ name: values.name, time: calculateTime() + values.time, taskType: PlanItemType.ComplexTask });
          fetchSubtasks().then(result => {
            setSubitems(result);
          });
        });
    }
  };

  const subtaskInitData: PlanItemFormData = {
    name: `${i18n.t('planItemActivity:newTask')}${subitems.length - 1}`,
    nameForChild: '',
    time: 0,
    taskType: PlanItemType.SimpleTask,
  };

  const initialValues: PlanItemFormData = {
    name: selectedPlanItem ? selectedPlanItem.name : `${i18n.t('planItemActivity:newTask')}${taskNumber}`,
    nameForChild: selectedPlanItem ? selectedPlanItem.nameForChild : '',
    time: selectedPlanItem ? selectedPlanItem.time : 0,
    taskType: PlanItemType.SimpleTask,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    nameForChild: Yup.string(),
    time: Yup.number(),
  });

  const handleDelete = (item: PlanItem) => async () => {
    await planItem.deleteSubtask(item);
    setSelectedPlanItem(undefined);
  };

  const renderForm = (formikProps: FormikProps<PlanItemFormData>) => {
    return (
      <>
        <View style={styles.complexTask}>
          <ScrollView>
            {subitems.map(item => (
              <ComplexTaskItem
                name={item.nameForChild}
                time={item.time.toString()}
                image={item.image}
                selected={isSelected(item)}
                onPress={changeSelection(item, formikProps)}
                onDelete={handleDelete(item)}
                key={item.id}
              />
            ))}
            <ComplexTaskAddButton onPress={addNewTask} />
          </ScrollView>
        </View>
        {!selectedPlanItem && (
          <View style={styles.activityIndicatorContainer}>
            {!noSubitems && <ActivityIndicator color={palette.primary} size="large" />}
            {noSubitems && (
              <StyledText style={styles.noTaskLabel}>{i18n.t('planItemActivity:createFirstTask')}</StyledText>
            )}
          </View>
        )}
        {selectedPlanItem && (
          <View style={styles.simpleTaskFormContainer}>
            <SimpleTask
              formikProps={formikProps}
              style={styles.simpleTask}
              planItem={selectedPlanItem}
              taskNumber={taskNumber}
            />
          </View>
        )}
      </>
    );
  };

  const isSelected = (item: PlanItem) => {
    if (selectedPlanItem && item.id === selectedPlanItem.id) {
      return true;
    } else {
      return false;
    }
  };

  const changeSelection = (item: PlanItem, formikProps: FormikProps<PlanItemFormData>) => () => {
    formikProps.setFieldValue('nameForChild', item.nameForChild);
    formikProps.submitForm();
    setSelectedPlanItem(item);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={renderForm}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: palette.backgroundSurface,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '94%',
    paddingHorizontal: dimensions.spacingHuge,
    paddingTop: dimensions.spacingBig,
  },
  complexTask: {
    flexGrow: 3,
    flex: 3,
  },
  simpleTask: {
    flexGrow: 8,
    marginTop: 3,
    marginLeft: dimensions.spacingMedium,
    paddingBottom: dimensions.spacingLarge,
  },
  simpleTaskFormContainer: {
    flexGrow: 7,
    flex: 7,
  },
  activityIndicatorContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '65%',
  },
  noTaskLabel: {
    alignSelf: 'center',
  },
});
