import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Icon, IconButton, ModalTrigger, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, palette } from 'styles';
import { ImageAction } from './ImageAction';

interface Props extends NavigationInjectedProps {
  planItem: PlanItem;
}

const ImagePicker: SFC<Props> = ({ planItem, navigation }) => {
  const navigateToImageLibrary = () => {
    navigation.goBack();
    navigation.navigate('ImageLibrary', {
      planItem,
    });
  };

  const renderModalContent = () => (
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

  return (
    <ModalTrigger modalContent={renderModalContent()} title={i18n.t('planItemActivity:addImage')}>
      <View style={styles.imagePicker}>
        <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
      </View>
    </ModalTrigger>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    paddingHorizontal: 91,
    paddingVertical: 67,
  },
  imageActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: dimensions.spacingLarge,
  },
});

export default withNavigation(ImagePicker);
