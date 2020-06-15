import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { ImagePickerResponse } from 'react-native-image-picker';

import { Icon, ModalTrigger } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { loadImage, uploadImage } from '../../infrastructure/Images';
import { ImagePickerModal } from './ImagePickerModal';

interface Props {
  planItem: PlanItem;
  setFieldValue: (field: string, value: any) => void;
  submitForm: () => void;
}

interface State {
  imageUri: string;
}

export class ImagePicker extends PureComponent<Props, State> {
  state = {
    imageUri: '',
  };

  componentDidMount = async () => {
    if (this.props.planItem && this.props.planItem.image) {
      const imageUri = await loadImage(this.props.planItem.image);
      this.setState({ imageUri });
    }
  };

  updateImage = async (image: ImagePickerResponse) => {
    const imageName = await uploadImage(image.uri, image.fileName);
    this.props.setFieldValue('image', imageName);
    this.props.submitForm();
    this.setState({ imageUri: image.uri });
  };

  render() {
    const { planItem } = this.props;
    return (
      <View style={styles.container}>
        <ModalTrigger
          modalContent={<ImagePickerModal planItem={planItem} updateImage={this.updateImage} />}
          title={i18n.t('planItemActivity:addImage')}
        >
          <View style={styles.imagePicker}>
            {planItem && this.state.imageUri ? (
              <Image source={{ uri: this.state.imageUri }} style={styles.image} />
            ) : (
              <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
            )}
          </View>
        </ModalTrigger>
      </View>
    );
  }
}

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
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
