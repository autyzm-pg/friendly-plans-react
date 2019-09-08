import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderProps } from 'react-navigation';

import { NavigationService } from 'services';
import { getElevation, headerHeight, palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

type Props = HeaderProps;

export class Header extends React.PureComponent<Props> {
  get title() {
    const { scene } = this.props;
    const { options } = scene.descriptor;
    return typeof options.headerTitle !== 'function' && options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;
  }

  openDrawer = () => this.props.navigation.openDrawer();

  goBack = () => NavigationService.goBack(); // this.props.navigation didn't worked

  get isRoot(): boolean {
    return this.props.navigation.state.routes.length <= 1;
  }

  render() {
    const {} = this.props;
    return (
      <View style={styles.container}>
        <IconButton
          name={this.isRoot ? 'menu' : 'arrow-back'}
          type="material"
          onPress={this.isRoot ? this.openDrawer : this.goBack}
          size={24}
          color={palette.textWhite}
          containerStyle={styles.iconContainer}
        />
        <StyledText style={styles.headerText}>{this.title as string}</StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
    paddingHorizontal: 16,
    backgroundColor: palette.primary,
    ...getElevation(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 8,
  },
  headerText: {
    marginStart: 8,
    flex: 1,
    ...typography.header,
    color: palette.textWhite,
  },
});
