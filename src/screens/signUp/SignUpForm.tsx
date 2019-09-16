import { FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Button, CheckboxInput, InputItem, StyledText } from 'components';
import { i18n } from 'locale';
import { NavigationService } from 'services';
import { palette } from 'styles';
import { SignUpFormData } from './SignUpFormContainer';

interface Props extends FormikProps<SignUpFormData> {
  loading?: boolean;
}

export class SignUpForm extends React.PureComponent<Props> {
  navigateToTermsOfUse = () => {
    NavigationService.navigate('TermsOfUse');
  };

  checkTermsofUse = (value: boolean) => {
    this.props.setFieldValue('termsAccepted', value);
  };

  render() {
    const { handleChange, handleBlur, values, handleSubmit, errors, touched, loading } = this.props;
    return (
      <View>
        <InputItem
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          label={i18n.t('common:email')}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          blurOnSubmit
        />

        <InputItem
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          touched={touched.password}
          label={i18n.t('common:password')}
          secureTextEntry
          textContentType="password"
          blurOnSubmit
        />

        <CheckboxInput
          checked={values.termsAccepted}
          onPress={this.checkTermsofUse}
          error={errors.termsAccepted}
          title={i18n.t('signUp:accept')}
        >
          <TouchableOpacity onPress={this.navigateToTermsOfUse}>
            <StyledText style={styles.link}>{i18n.t('signUp:termsOfUse')}</StyledText>
          </TouchableOpacity>
        </CheckboxInput>
        <Button
          onPress={handleSubmit}
          title={i18n.t('signUp:signUpButton')}
          containerStyle={styles.button}
          loading={loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 20,
  },
  link: {
    color: palette.primary,
  },
});
