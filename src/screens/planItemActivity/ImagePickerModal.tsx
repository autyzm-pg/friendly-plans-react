import { IconButton } from 'components';
import { i18n } from 'locale';
import { noop } from 'lodash';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import React, { SFC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import { NavigationService } from 'services';
import { dimensions } from 'styles';

interface Props {
  closeModal?: () => void;
  planItem: PlanItem;
}

export const ImagePickerModal: SFC<Props> = ({ closeModal = noop, planItem }) => {
  const navigateToImageLibrary = () => {
    closeModal();
    NavigationService.navigate(Route.ImageLibrary, {
      planItem,
    });
  };

  const takePhotoHandler = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image: any) => {
      closeModal();
      // SEND TO SERVER?
    });
  };

  const selectPhotoFromDeviceHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image: any) => {
      closeModal();
      // SEND TO SERVER?
    });
  };

  return (
    <View style={styles.imageActionContainer}>
      <View style={styles.iconDecscriptionContainer}>
        <Text style={styles.descriptionText}>{i18n.t('planItemActivity:imageActionTakePhoto')}</Text>
        <IconButton name="photo-camera" type="material" size={24} onPress={takePhotoHandler} />
      </View>
      <View style={styles.iconDecscriptionContainer}>
        <Text style={styles.descriptionText}>{i18n.t('planItemActivity:imageActionLibrary')}</Text>
        <IconButton name="photo-library" type="material" size={24} onPress={navigateToImageLibrary} />
      </View>
      <View style={styles.iconDecscriptionContainer}>
        <Text style={styles.descriptionText}>{i18n.t('planItemActivity:imageActionBrowse')}</Text>
        <IconButton name="file-download" type="material" size={24} onPress={selectPhotoFromDeviceHandler} />
      </View>
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
  iconDecscriptionContainer: {
    marginBottom: 20,
  },
  descriptionText: {
    marginBottom: 5,
  },
});
