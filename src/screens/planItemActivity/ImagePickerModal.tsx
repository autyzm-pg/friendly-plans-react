import { IconButton } from 'components';
import { i18n } from 'locale';
import { noop } from 'lodash';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import React, { SFC , useState } from 'react';
import { ImageBackground, Button, StyleSheet, View } from 'react-native';
import { NavigationService } from 'services';
import { dimensions, palette } from 'styles';
import { ImageAction } from './ImageAction';
import ImagePicker from 'react-native-image-crop-picker';
import { PlanElementListItem } from 'screens/runPlan/ListMode/PlanElementListItem';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

interface Props {
  updateImage: (img: string) => void;
  closeModal: () => void;
  planItem: PlanItem;
}

export const ImagePickerModal: SFC<Props> = ({ updateImage, closeModal, planItem }) => {

    const [image, setImage] = useState('');

    const handleUpdateImage = (img: string) => {
      updateImage(img);
      closeModal();
    }

    const browseDevice = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
            }).then(image => {
            //console.log(image);
            setImage(image.path);
        });
    };

    const takeAPhoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false
            }).then(image => {
            //console.log(image);
           setImage(image.path);
        });
    };


        return (
    <View style={styles.imageActionContainer}>
      <ImageAction title={i18n.t('planItemActivity:imageActionTakePhoto')}>
        <IconButton name="photo-camera" type="material" size={24} onPress={takeAPhoto} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionLibrary')}>
        <IconButton name="photo-library" type="material" size={24} />
      </ImageAction>
      <ImageAction title={i18n.t('planItemActivity:imageActionBrowse')}>
        <IconButton name="file-download" type="material" size={24} onPress={browseDevice}/>
      </ImageAction>
      <View style={styles.submitButton}>
        <Button title="Zatwierdź" onPress={() => {handleUpdateImage(image)}}></Button>
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
    height: 150,
  },

  submitButton: { 
    position: 'absolute',
    bottom: 0,
    left: 140,
  },
});
