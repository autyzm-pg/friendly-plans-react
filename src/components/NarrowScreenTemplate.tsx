import React from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { getElevation, headerHeight, palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

const { height } = Dimensions.get('window');

interface Props extends NavigationInjectedProps {
  children?: React.ReactNode;
  title: string;
  buttons?: React.ReactNode;
}

export class NarrowScreenTemplate extends React.PureComponent<Props> {
  backgroundAnimation = new Animated.Value(0);

  componentDidMount() {
    Animated.timing(this.backgroundAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  goBack = () => {
    Animated.timing(this.backgroundAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => this.props.navigation.goBack(), 200);
  };

  render() {
    const translateY = this.backgroundAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0],
    });
    const { children, title, buttons } = this.props;
    return (
      <Animated.View style={[styles.overlay]}>
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
          <View style={styles.header}>
            <IconButton name="arrow-back" type="material" size={24} color={palette.textWhite} onPress={this.goBack} />
            <StyledText style={styles.headerText}>{title}</StyledText>
            {buttons}
          </View>
          <ScrollView bounces={false} alwaysBounceVertical={false} contentContainerStyle={styles.contentContainer}>
            {children}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.modalBackgroundOverlay,
  },
  container: {
    flexGrow: 1,
    width: 528,
    ...getElevation(4),
  },
  header: {
    flexDirection: 'row',
    height: headerHeight,
    paddingHorizontal: 16,
    backgroundColor: palette.primaryVariant,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    marginStart: 8,
    flex: 1,
    ...typography.header,
    color: palette.textWhite,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: palette.background,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
