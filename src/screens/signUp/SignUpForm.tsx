import { FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImagePicker, { Image } from 'react-native-image-crop-picker';

import { Button, InputItem } from 'components';
import { i18n } from 'locale';
import { NavigationService } from 'services';
import { palette } from 'styles';

import LoadImageButton from './LoadImageButton';
import { SignUpFormData } from './SignUpFormContainer';

const imageOptions = {
  width: 512,
  height: 512,
  compressImageQuality: 0.8,
  cropping: true,
  cropperCircleOverlay: true,
  writeTempFile: true,
};
interface Props extends FormikProps<SignUpFormData> {
  loading?: boolean;
}

export class SignUpForm extends React.PureComponent<Props> {
  navigateToTermsOfUse = () => {
    NavigationService.navigate('TermsOfUse');
  };
  openPicker = async () => {
    try {
      const image: Image = (await ImagePicker.openPicker(imageOptions)) as Image;
      this.props.setFieldValue('imageUrl', image.path);
    } catch (e) {
      // fail gracefully
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { handleChange, handleBlur, values, handleSubmit, errors, touched, loading } = this.props;

    return (
      <View style={styles.container}>
        <InputItem
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={errors.name}
          touched={touched.name}
          placeholder={i18n.t('common:name')}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="name"
          blurOnSubmit
          style={styles.input}
          styleContainer={styles.inputContainer}
        />

        <LoadImageButton imageUrl={values.imageUrl} loading={loading} openPicker={this.openPicker} />

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

        <Button
          onPress={handleSubmit}
          title={i18n.t('signUp:signUpButton')}
          containerStyle={styles.signUpbuttonContainer}
          loading={loading}
          buttonStyle={styles.signUpButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 272,
    alignSelf: 'center',
  },
  signUpbuttonContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  inputContainer: { borderWidth: 0, marginBottom: 12 },
  input: {
    backgroundColor: palette.background,
    borderRadius: 12,
    height: 44,
  },
  signUpButton: {
    borderRadius: 12,
    height: 44,
  },
});
