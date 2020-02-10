import { Formik, FormikProps } from 'formik';
import React from 'react';
import firebase from 'react-native-firebase';
import * as Yup from 'yup';

import { i18n } from 'locale';
import { Route } from 'navigation';
import { FirebaseService, NavigationService } from 'services';

import { SignUpForm } from './SignUpForm';

export interface SignUpFormData {
  email: string;
  password: string;
  name: string;
  imageUrl: string;
}

const initialValues = {
  email: '',
  password: '',
  name: '',
  imageUrl: '',
  termsAccepted: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation:email'))
    .required(i18n.t('validation:required')),
  password: Yup.string()
    .min(6, i18n.t('validation:passwordLength'))
    .required(i18n.t('validation:required')),
  name: Yup.string().required(i18n.t('validation:required')),
});

interface State {
  loading: boolean;
}

export class SignUpFormContainer extends React.PureComponent<{}, State> {
  state = {
    loading: false,
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

  renderForm = (props: FormikProps<SignUpFormData>) => <SignUpForm {...props} loading={this.state.loading} />;

  onSubmit = async (values: SignUpFormData) => {
    this.setState({ loading: true });
    try {
      const userCredentials = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
      if (userCredentials.user) {
        userCredentials.user.updateProfile({ displayName: values.name });

        if (values.imageUrl) {
          await FirebaseService.updateUserImage(values.imageUrl);
        }
      }
      NavigationService.navigate(Route.Authenticated);
    } catch (error) {
      this.setState({ loading: false });
      NavigationService.navigate(Route.Dialog, {
        title: i18n.t('common:error'),
        description: error.message,
      });
    }
  };
}
