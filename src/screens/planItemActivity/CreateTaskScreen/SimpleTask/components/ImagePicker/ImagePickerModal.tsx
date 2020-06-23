import { IconButton } from 'components';
import { i18n } from 'locale';
import { noop } from 'lodash';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationService } from 'services';
import { dimensions } from 'styles';
import { ImageAction } from './ImageAction';

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

  return (
    <View style={styles.imageActionContainer}>
      <ImageAction title={i18n.t('planItemActivity:imageActionTakePhoto')}>
        <IconButton name="photo-camera" type="material" size={24} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionLibrary')}>
        <IconButton name="photo-library" type="material" size={24} onPress={navigateToImageLibrary} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionBrowse')}>
        <IconButton name="file-download" type="material" size={24} />
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
