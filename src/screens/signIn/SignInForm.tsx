import { FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, FlatButton, InputItem } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';

import { SignInFormData } from './SignInFormContainer';

interface Props extends FormikProps<SignInFormData> {
  loading?: boolean;
  navigateToResetPassword: () => void;
}

export class SignInForm extends React.PureComponent<Props> {
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
          placeholder={i18n.t('common:email')}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          blurOnSubmit
          style={styles.input}
          styleContainer={styles.inputContainer}
        />

        <InputItem
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          touched={touched.password}
          placeholder={i18n.t('common:password')}
          secureTextEntry
          textContentType="password"
          blurOnSubmit
          style={styles.input}
          styleContainer={styles.inputContainer}
        />

        <FlatButton
          onPress={this.props.navigateToResetPassword}
          title={i18n.t('signIn:forgotPassword')}
          titleStyle={styles.resetPasswordTitle}
          buttonStyle={styles.resetPasswordButton}
          containerStyle={styles.resetPasswordContainer}
        />

        <Button
          onPress={handleSubmit}
          title={i18n.t('signIn:signInButton')}
          containerStyle={styles.button}
          loading={loading}
          buttonStyle={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    borderRadius: 12,
    height: 44,
  },
  resetPasswordTitle: {
    ...typography.caption,
  },
  resetPasswordButton: {
    justifyContent: 'flex-end',
    height: 36,
  },
  resetPasswordContainer: {
    top: -8,
    alignSelf: 'center',
  },
  inputContainer: { borderWidth: 0, marginBottom: 12 },
  input: {
    backgroundColor: palette.background,
    borderRadius: 12,
    height: 44,
  },
});
