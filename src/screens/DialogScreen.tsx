import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { ModalTemplate, StyledText } from 'components';
import { emptyFunction } from 'helpers/functions';
import { DialogProps } from 'models';
import { typography } from 'styles';

type State = DialogProps;

export class DialogScreen extends React.PureComponent<
  NavigationInjectedProps,
  State
> {
  static getDerivedStateFromProps(
    props: NavigationInjectedProps,
    state: State,
  ) {
    if (state.title) {
      return null;
    }
    const { navigation } = props;
    return {
      title: navigation.getParam('title'),
      description: navigation.getParam('description'),
      onPress: navigation.getParam('onPress'),
      buttonTitle: navigation.getParam('buttonTitle'),
    };
  }

  state = {
    title: '',
    description: '',
    onPress: emptyFunction,
    buttonTitle: '',
  };

  render() {
    const { title, description, onPress, buttonTitle } = this.state;
    return (
      <ModalTemplate
        onPress={onPress}
        navigation={this.props.navigation}
        buttonTitle={buttonTitle}
      >
        <StyledText style={styles.title}>{title}</StyledText>
        <StyledText style={styles.description}>{description}</StyledText>
      </ModalTemplate>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 6,
    ...typography.subtitle1,
  },
  description: {
    textAlign: 'center',
    ...typography.body2,
  },
});
