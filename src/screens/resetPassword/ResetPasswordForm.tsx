import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import * as Yup from 'yup';

import { Button, InputItem } from 'components';
import { i18n } from 'locale';
import { Route } from 'navigation';
import { NavigationService } from 'services';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation:email'))
    .required(i18n.t('validation:required')),
});

const initialValues = {
  email: '',
};

interface ResetPasswordFormData {
  email: string;
}

interface State {
  loading: boolean;
}

export class ResetPasswordForm extends React.PureComponent<{}, State> {
  state = {
    loading: false,
  };

  onSubmit = async (values: ResetPasswordFormData) => {
    try {
      await firebase.auth().sendPasswordResetEmail(values.email);
      Alert.alert(i18n.t('common:success'), i18n.t('resetPassword:resetPasswordSuccess'));
      NavigationService.navigate(Route.SignIn);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert(i18n.t('common:error'), i18n.t('resetPassword:userNotFound'));
      } else {
        Alert.alert(i18n.t('common:error'), i18n.t('common:unknownError'));
      }
    }
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
        render={this.renderForm}
      />
    );
  }

  renderForm = (props: FormikProps<ResetPasswordFormData>) => {
    const { handleChange, handleBlur, values, handleSubmit, errors, touched } = props;
    return (
      <View style={styles.container}>
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
        <Button
          onPress={handleSubmit}
          title={i18n.t('resetPassword:resetPasswordButtonLabel')}
          containerStyle={styles.button}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  button: {
    marginTop: 8,
  },
});
