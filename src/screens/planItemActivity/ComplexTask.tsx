import { FormikProps } from 'formik';
import React, { SFC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { PlanItem } from 'models';
import { dimensions, palette } from 'styles';
import { ComplexTaskItem } from './ComplexTaskItem';
import { PlanItemFormData } from './PlanItemForm';
import { SimpleTask } from './SimpleTask';

interface Props {
  planItem: PlanItem;
  formikProps: FormikProps<PlanItemFormData>;
}

export const ComplexTask: SFC<Props> = ({ planItem, formikProps }) => {
  const complexTask = [1, 2, 3, 4, 5];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.complexTaskContainer}>
          <ScrollView>
            {complexTask.map((_, key) => (
              <ComplexTaskItem key={key} name={'Ustaw podstawę'} image={'Zdjęcie'} time={'10'} />
            ))}
          </ScrollView>
        </View>
        <SimpleTask style={styles.simpleTaskContainer} planItem={planItem} formikProps={formikProps} />
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
    height: '95%',
    paddingHorizontal: dimensions.spacingExtraLarge,
    paddingTop: dimensions.spacingBig,
  },
  complexTaskContainer: {
    flexGrow: 1.45,
  },
  simpleTaskContainer: {
    flexGrow: 3,
    marginLeft: dimensions.spacingMedium,
  },
});
