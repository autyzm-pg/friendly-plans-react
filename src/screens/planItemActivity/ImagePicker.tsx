import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { ImagePickerResponse } from 'react-native-image-picker';

import { Icon, ModalTrigger } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { ImagePickerModal } from './ImagePickerModal';

interface Props {
  planItem: PlanItem;
}
interface State {
  imageUri: string;
}

export class ImagePicker extends PureComponent<Props, State> {
  state = {
    imageUri: this.props.planItem.image,
  };

  updateImage = (image: ImagePickerResponse) => {
    const imageUri = `data:${image.type};base64,${image.data}`;
    this.props.planItem.update({ image: imageUri });
    this.setState({ imageUri });
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
            {planItem && planItem.image ? (
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
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
});
