import { IconButton } from 'components';
import { i18n } from 'locale';
import noop from 'lodash.noop';
import { PlanItem } from 'models';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { NavigationService } from 'services';
import { dimensions } from 'styles';
import { ImageAction } from './ImageAction';

interface Props {
  closeModal?: () => void;
  updateImage: (image: ImagePickerResponse) => void;
  planItem: PlanItem;
}

export const ImagePickerModal: SFC<Props> = ({ closeModal = noop, planItem, updateImage }) => {
  const navigateToImageLibrary = () => {
    closeModal();
    NavigationService.navigate('ImageLibrary', {
      planItem,
    });
  };

  const openCamera = () => {
    closeModal();
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
      },
      response => {
        if (!response.didCancel && !response.error) {
          updateImage(response);
        }
      },
    );
  };

  const openGallery = () => {
    closeModal();
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (!response.didCancel && !response.error) {
          updateImage(response);
        }
      },
    );
  };

  return (
    <View style={styles.imageActionContainer}>
      <ImageAction title={i18n.t('planItemActivity:imageActionTakePhoto')}>
        <IconButton name="photo-camera" type="material" size={24} onPress={openCamera} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionLibrary')}>
        <IconButton name="photo-library" type="material" size={24} onPress={navigateToImageLibrary} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionBrowse')}>
        <IconButton name="file-download" type="material" size={24} onPress={openGallery} />
      </ImageAction>
    </View>
  );
};

const styles = StyleSheet.create({
  imageActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: dimensions.spacingLarge,
  },
});
