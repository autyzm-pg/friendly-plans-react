import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Icon } from 'components';
import { palette, typography } from 'styles';

interface Props {
  imageBase64Data: string;
  onChange: (image: any) => void;
}


const IMAGE_SIZE = 256;

export class PlanItemImagePicker extends React.PureComponent<Props> {

  takePicture = () => {
    const options = {
      title: 'Pick image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      const { onChange } = this.props;

      if (response.didCancel || response.error) {
        return;
      } else {
        onChange(response);
      }
    });
  };

  render() {
    const { imageBase64Data } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.takePicture}>
          {imageBase64Data ? (
            <Image source={{uri: imageBase64Data}} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }} />
          ) : (
            <Icon name="image" size={IMAGE_SIZE} iconStyle={styles.icon} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginEnd: 12,
  },
  input: {
    height: 42,
    ...typography.headline6,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
    marginEnd: 120,
  },
});
