import { FormikProps } from 'formik';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import PlayButton, { TextInput } from 'components';
import { i18n } from 'locale';
import { dimensions, palette } from 'styles';
import { Icon, StyledText } from '../../components';
import { PlanFormData } from './PlanForm';
import { ShuffleButton } from './ShuffleButton';

interface Props extends FormikProps<PlanFormData>, NavigationInjectedProps {}

export const PlanFormControls: SFC<Props> = ({ values, handleChange, isSubmitting, submitForm, ...props }) => {
  const plan = props.navigation.getParam('plan');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
        {isSubmitting ? (
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
        <ShuffleButton disabled={!isSubmitting} />
        <PlayButton plan={plan} disabled={!isSubmitting} size={36} />
      </View>
    </View>
  );
};

export default withNavigation(PlanFormControls);

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
