import PlayButton, { Icon, TextInputForm } from 'components';
import { Formik, FormikProps } from 'formik';

import { i18n } from 'locale';
import { Plan } from 'models';
import React, { SFC } from 'react';
import * as Yup from 'yup';

import { StyleSheet, View } from 'react-native';
import { dimensions, palette } from 'styles';
import { PlanFormData } from './PlanForm';
import { ShuffleButton } from './ShuffleButton';

export interface PlanFormData {
  planInput: string;
}

const initialValues: PlanFormData = {
  planInput: '',
};

const validationSchema = Yup.object().shape({
  planInput: Yup.string().required(),
});

interface Props {
  onSubmit: (planFormData: PlanFormData) => Promise<void>;
  plan?: Plan;
}

export const PlanForm: SFC<Props> = ({ plan, onSubmit }) => {
  const renderFormControls = ({ values, setFieldValue, submitForm }: FormikProps<PlanFormData>) => {
    const handleChangeText = (value: string) => setFieldValue('planInput', value);

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
          <TextInputForm
            style={styles.input}
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
  input: {
    marginLeft: dimensions.spacingSmall,
  },
});
