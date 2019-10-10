import { Dialog, IconButton, PlayButton, StyledText, TextInput } from 'components';
import { Formik, FormikProps } from 'formik';
import { i18n } from 'locale';
import { Plan } from 'models';
import React, { SFC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
  const [emojiModalVisibility, setEmojiModalVisibility] = useState(false);
  const showEmojiModal = () => setEmojiModalVisibility(true);
  const hideEmojiModal = () => setEmojiModalVisibility(false);

  const renderEmojiModal = () => {
    if (!emojiModalVisibility) {
      return;
    }

    return (
      <Dialog onPress={hideEmojiModal}>
        <StyledText>Test emoji dialog</StyledText>
      </Dialog>
    );
  };

  console.log(emojiModalVisibility);

  const renderFormControls = ({ values, handleChange, submitForm }: FormikProps<PlanFormData>) => {
    return (
      <View style={styles.container}>
        {renderEmojiModal()}
        <View style={styles.inputContainer}>
          <IconButton name="emoticon" size={24} color={palette.textInputPlaceholder} onPress={showEmojiModal} />
          {plan ? (
            <StyledText style={styles.styledText}>{values.planInput}</StyledText>
          ) : (
            <TextInput
              style={styles.textInput}
              placeholder={i18n.t('planActivity:planNamePlaceholder')}
              value={values.planInput}
              onChangeText={handleChange('planInput')}
              onEndEditing={submitForm}
            />
          )}
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
