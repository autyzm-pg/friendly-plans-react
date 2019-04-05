import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Icon } from 'components';
import { palette, typography } from 'styles';

interface Props {}
interface State {
  size: number,
  imageSource: any,
}

export class PlanItemImagePicker extends React.PureComponent<Props, State> {
  state = {
    size: 256,
    imageSource: null,
  };

  takePicture = () => {
    const options = {
      title: 'Pick image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) {
        console.log('User cancelled image picker');
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source,
        });
      }
    });
  };

  render() {
    const { imageSource, size } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.takePicture}>
          {imageSource ? (
            <Image source={imageSource} style={{width: size, height: size}} />
          ) : (
            <Icon name="image" size={size} iconStyle={styles.icon} />
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
