import { ErrorMessage, Formik, FormikProps } from 'formik';
import React, { SFC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlayButton, { Emoji, Icon, ModalTrigger, TextInput } from 'components';
import { i18n } from 'locale';
import { Plan } from 'models';
import { dimensions, palette } from 'styles';
import { DEFAULT_EMOJI } from '../../assets/emojis';
import { IconSelectModal } from './IconSelectModal';
import { ShuffleButton } from './ShuffleButton';

export interface PlanFormData {
  planInput: string;
  emoji: string;
}

export interface PlanFormError {
  planInput?: string;
}

interface Props {
  onSubmit: (planFormData: PlanFormData) => Promise<void>;
  onValidate: (planFormData: PlanFormData) => Promise<void>;
  plan?: Plan;
  shuffleDisabled?: boolean;
  playDisabled?: boolean;
  numberPlan: number;
}

export const PlanForm: SFC<Props> = ({
  plan,
  numberPlan,
  onSubmit,
  onValidate,
  shuffleDisabled = false,
  playDisabled = false,
}) => {
  const initialValues: PlanFormData = {
    planInput: plan ? plan.name : `${i18n.t('planActivity:newPlan')}${numberPlan}`,
    emoji: plan ? plan.emoji : DEFAULT_EMOJI,
  };

  const renderFormControls = ({ values, setFieldValue, submitForm }: FormikProps<PlanFormData>) => {
    const handleChangeText = (value: string) => setFieldValue('planInput', value);
    const updateEmoji = async (emoji: string) => {
      await setFieldValue('emoji', emoji);
      submitForm();
    };

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {plan ? (
            <ModalTrigger title={'Wybierz ikonę'} modalContent={<IconSelectModal onEmojiSelect={updateEmoji} />}>
              <Emoji symbol={values.emoji} />
            </ModalTrigger>
          ) : (
            <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
          )}
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
          <ShuffleButton disabled={shuffleDisabled} />
          <PlayButton plan={plan} disabled={!plan || playDisabled} size={36} />
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
