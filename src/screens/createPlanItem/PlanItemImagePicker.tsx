import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Icon } from 'components';
import { palette, typography } from 'styles';

interface Props {
  source: any;
  onChange: (source: any) => void;
}

interface State {
  size: number;
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

    ImagePicker.showImagePicker(options, response => {
      const { onChange } = this.props;

      if (response.didCancel || response.error) {
        // tslint:disable-next-line:no-console
        console.log('User cancelled image picker');
      } else {
        const source = { uri: response.uri };

        onChange(source);
      }
    });
  };

  render() {
    const { size } = this.state;
    const { source } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.takePicture}>
          {source ? (
            <Image source={source} style={{ width: size, height: size }} />
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
