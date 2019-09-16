import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

import { i18n } from 'locale';
import { palette } from 'styles';
import { FlatButton } from './FlatButton';

interface Props {
  children?: JSX.Element | JSX.Element[];
  navigation: NavigationScreenProp<NavigationRoute<any>>;
  onPress?: () => void;
  buttonTitle?: string;
}

interface State {
  backgroundAnimation: Animated.Value;
}

export class ModalTemplate extends React.PureComponent<Props, State> {
  state = {
    backgroundAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.backgroundAnimation, {
      toValue: 1,
      duration: 200,
    }).start();
  }

  onCancel = () => {
    this.props.navigation.goBack();
  };

  onPress = () => {
    this.props.navigation.goBack();
    this.props.onPress!();
  };

  render() {
    const backgroundColor = this.state.backgroundAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)'],
    });
    const { children, buttonTitle } = this.props;
    return (
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <View style={styles.content}>
          <View>{children}</View>
          <View style={styles.footer}>
            <FlatButton
              title={!!buttonTitle ? i18n.t('common:cancel') : i18n.t('common:ok')}
              containerStyle={styles.button}
              onPress={this.onCancel}
            />
            {!!buttonTitle && (
              <FlatButton title={this.props.buttonTitle} onPress={this.onPress} containerStyle={styles.button} />
            )}
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  content: {
    maxWidth: '90%',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: palette.background,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
