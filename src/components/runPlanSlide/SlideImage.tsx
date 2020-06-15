import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { palette } from '../../styles';
import { StyledText } from '../StyledText';

interface Props {
  imageUri: string;
}

export class SlideImage extends React.PureComponent<Props> {
  render() {
    if (this.props.imageUri) {
      return (
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={{ uri: this.props.imageUri }} />
        </View>
      );
    }
    return <StyledText style={[styles.loadingText]}>Loading...</StyledText>;
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 24,
  },
  image: {
    flex: 1,
  },
  nameTextColor: {
    color: palette.textBlack,
  },
});
