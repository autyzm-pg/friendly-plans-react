import { Formik, FormikProps } from 'formik';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import PlayButton, { Icon, TextInput } from 'components';
import { i18n } from 'locale';
import { Plan } from 'models';
import { dimensions, palette } from 'styles';
import { PlanFormData } from './PlanForm';
import { ShuffleButton } from './ShuffleButton';

export interface PlanFormData {
  planInput: string;
}

interface Props {
  onSubmit: (planFormData: PlanFormData) => Promise<void>;
  plan?: Plan;
}

export const PlanForm: SFC<Props> = ({ plan, onSubmit }) => {
  const initialValues: PlanFormData = {
    planInput: plan ? plan.name : '',
  };

  const validationSchema = Yup.object().shape({
    planInput: Yup.string().required(),
  });

  const renderFormControls = ({ values, setFieldValue, submitForm }: FormikProps<PlanFormData>) => {
    const handleChangeText = (value: string) => setFieldValue('planInput', value);

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
          <TextInput
            style={styles.textInput}
            placeholder={i18n.t('planActivity:planNamePlaceholder')}
            value={values.planInput}
            onChangeText={handleChangeText}
            onEndEditing={submitForm}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ShuffleButton disabled={!plan} />
          <PlayButton plan={plan} disabled={!plan} size={36} />
        </View>
      </View>
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
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '40%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: dimensions.spacingSmall,
  },
});
