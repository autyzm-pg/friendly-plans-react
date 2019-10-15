import PlayButton, { Icon, TextInputForm } from 'components';
import { Formik, FormikProps } from 'formik';

import { i18n } from 'locale';
import { Plan } from 'models';
import React, { SFC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { dimensions, palette } from 'styles';
import { PlanFormData } from './PlanForm';
import { ShuffleButton } from './ShuffleButton';

export interface PlanFormData {
  planInput: string;
}

const FORM_INITIAL_VALUES: PlanFormData = {
  planInput: '',
};

interface Props {
  onSubmit: (planFormData: PlanFormData) => Promise<void>;
  plan?: Plan;
}

export const PlanForm: SFC<Props> = ({ plan, onSubmit }) => {
  const renderFormControls = ({ values, setFieldValue, submitForm }: FormikProps<PlanFormData>) => {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
          <TextInput
            style={styles.inputContainer}
            onChangeText={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            hideUnderline={!this.state.isTouched && !isEmpty(value)}
            isTouched={this.state.isTouched || isEmpty(value)}
            {...this.props}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ShuffleButton disabled={!plan} />
          <PlayButton plan={plan} disabled={!plan} size={36} />
        </View>
      </View>
    );
  };

  return <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={onSubmit} render={renderFormControls} />;
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
  styledText: {
    color: palette.textBlack,
    marginLeft: dimensions.spacingSmall,
  },
  textInput: {
    marginLeft: dimensions.spacingSmall,
  },
});

/*
          <TextInputForm
            name="planInput"
            placeholder={i18n.t('planActivity:planNamePlaceholder')}
            value={values.planInput}
            onChange={setFieldValue}
            onEndEditing={submitForm}
          />
*/
