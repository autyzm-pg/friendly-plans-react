import PlayButton, { Icon, TextInput } from 'components';
import { ErrorMessage, Formik, FormikProps } from 'formik';
import { i18n } from 'locale';
import { Plan } from 'models';
import React, { SFC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { dimensions, palette } from 'styles';
import { PlanFormData } from './PlanForm';
import { ShuffleButton } from './ShuffleButton';

export interface PlanFormData {
  planInput: string;
}

interface Props {
  onSubmit: (planFormData: PlanFormData) => Promise<void>;
  onValidate: (planFormData: PlanFormData) => Promise<void>;
  plan?: Plan;
}

export const PlanForm: SFC<Props> = ({ plan, onSubmit, onValidate }) => {
  const initialValues: PlanFormData = {
    planInput: plan ? plan.name : '',
  };

  const renderFormControls = ({ values, setFieldValue, submitForm, errors }: FormikProps<PlanFormData>) => {
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
          <Text style={styles.errorMessage}>
            <ErrorMessage name="planInput" />
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ShuffleButton disabled={!plan} />
          <PlayButton plan={plan} disabled={!plan} size={36} />
        </View>
      </View>
    );
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit} render={renderFormControls} validate={onValidate} />;
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
  errorMessage: {
    color: palette.error,
    marginLeft: dimensions.spacingSmall,
  },
});
