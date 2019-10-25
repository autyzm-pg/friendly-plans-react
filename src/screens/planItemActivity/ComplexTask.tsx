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
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.complexTask}>
          <ScrollView>
            <ComplexTaskItem name={'Ustaw podstawę'} image={'Zdjęcie'} time={'10'} />
            <ComplexTaskItem selected name={'Ustaw podstawę'} image={'Zdjęcie'} time={'10'} />
            <ComplexTaskItem name={'Ustaw podstawę'} image={'Zdjęcie'} time={'10'} />
            <ComplexTaskItem name={'Ustaw podstawę'} image={'Zdjęcie'} time={'10'} />
          </ScrollView>
        </View>
        <SimpleTask style={styles.simpleTask} planItem={planItem} formikProps={formikProps} />
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
    paddingHorizontal: dimensions.spacingExtraLarge,
    paddingTop: dimensions.spacingBig,
  },
  complexTask: {
    flexGrow: 1.1,
  },
  simpleTask: {
    flexGrow: 3,
    marginTop: 3,
    marginLeft: dimensions.spacingMedium,
  },
});
