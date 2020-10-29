import React, { SFC, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Button } from 'react-native';

import { Icon, ModalTrigger } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { ImagePickerModal } from './ImagePickerModal';
//import { Icon } from 'react-native-elements';

interface Props {
  planItem: PlanItem;
  updatePlanImage: (image: string) => void;
}

export const ImagePicker: SFC<Props> = ({planItem, updatePlanImage }) => {

  const state = {
    modalVisible: false,
  }

  const closeModal = () => {
    this.setState({modalVisible: false});
  }

  const [image, setImage] = useState('');

  const updateImage = (img: string) => {
    setImage(img);
    updatePlanImage(img);
  }

  return (
    <View style={styles.container}>
      <ModalTrigger modalContent={<ImagePickerModal onRequestClose={() => this.closeModal()} updateImage = {updateImage} planItem={planItem} />} title={i18n.t('planItemActivity:addImage')}>
        <View style={styles.imagePicker}>
          {image ? <Image source={{uri: image}} style={{height: 400, width: 800}}/> : <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />}
        </View>
      </ModalTrigger>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    paddingHorizontal: 85,
    paddingVertical: 67,
  },
});
