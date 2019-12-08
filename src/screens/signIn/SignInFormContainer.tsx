import { Formik, FormikProps } from 'formik';
import React from 'react';
import firebase from 'react-native-firebase';
import * as Yup from 'yup';

import { i18n } from 'locale';
import { Route } from 'navigation';
import { NavigationService } from 'services';
import { SignInForm } from './SignInForm';

export interface SignInFormData {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation:email'))
    .required(i18n.t('validation:required')),
  password: Yup.string()
    .min(6, i18n.t('validation:passwordLength'))
    .required(i18n.t('validation:required')),
});

interface State {
  loading: boolean;
}

export class SignInFormContainer extends React.PureComponent<{}, State> {
  state = {
    loading: false,
  };

  onSubmit = async (values: SignInFormData) => {
    this.setState({ loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
      NavigationService.navigate(Route.Authenticated);
    } catch (error) {
      this.setState({ loading: false });
      NavigationService.navigate(Route.Dialog, {
        title: i18n.t('common:error'),
        description: error.message,
      });
    }
  };

  navigateToResetPassword = () => {
    NavigationService.navigate(Route.ResetPassword);
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

  renderForm = (props: FormikProps<SignInFormData>) => (
    <SignInForm {...props} loading={this.state.loading} navigateToResetPassword={this.navigateToResetPassword} />
  );
}
