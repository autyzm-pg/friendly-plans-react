import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Button, Icon } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';

interface Props {
  loading?: boolean;
  imageUrl?: string;
  openPicker: () => void;
}

const LoadImageButton = ({ loading, imageUrl, openPicker }: Props) => (
  <View style={styles.loadImageContainer}>
    <Button
      title={i18n.t('common:addImage')}
      containerStyle={styles.signUpbuttonContainer}
      loading={loading}
      buttonStyle={styles.addImageButton}
      titleStyle={styles.titleButton}
      onPress={openPicker}
      icon={<Icon name="cloud-upload" type="material-community" />}
    />
    <View style={styles.imageContainer}>
      {!!imageUrl && (
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  loadImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signUpbuttonContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  addImageButton: {
    borderRadius: 12,
    height: 44,
    width: 210,
    backgroundColor: 'white',
  },
  titleButton: {
    color: palette.primary,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 24,
  },
  imageContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
});

export default LoadImageButton;
