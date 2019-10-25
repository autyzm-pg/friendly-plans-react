import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderProps } from 'react-navigation';

import { Student } from 'models';
import { NavigationService } from 'services';
import { dimensions, getElevation, headerHeight, palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

interface Props extends HeaderProps {
  student: Student;
}

const DASHBOARD = 'Dashboard';

export class Header extends React.PureComponent<Props> {
  get title() {
    const { scene, student } = this.props;
    const { options } = scene.descriptor;

    const headerTitle = (title: string) => {
      const studentPrefix = student ? `${student.name} / ` : '';
      return `${studentPrefix}${title}`;
    };

    if (options.headerTitle && options.headerTitle !== 'function') {
      return options.headerTitle;
    }

    return headerTitle(options.title || scene.route.routeName);
  }

  openDrawer = () => this.props.navigation.openDrawer();

  goBack = () => NavigationService.goBack();

  navigateToStudentsList = () => {
    NavigationService.navigate('StudentsList');
  };

  navigateToStudentSettings = () => {
    NavigationService.navigate('StudentSettings', {
      student: this.props.student,
    });
  };

  get isRoot(): boolean {
    return this.props.navigation.state.routes.length <= 1;
  }

  isDashboard() {
    const { routes } = this.props.navigation.state;

    const { routeName } = routes[routes.length - 1];

    return routeName === DASHBOARD;
  }

  renderButtons() {
    return this.isDashboard() ? (
      <>
        <IconButton
          name="settings"
          type="material"
          color={palette.textWhite}
          size={24}
          containerStyle={styles.iconContainer}
          onPress={this.navigateToStudentSettings}
        />
        <IconButton
          name="people"
          type="material"
          size={24}
          color={palette.textWhite}
          containerStyle={styles.iconContainer}
          onPress={this.navigateToStudentsList}
        />
      </>
    ) : null;
  }

  render() {
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
        {this.renderButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...getElevation(4),
    height: headerHeight,
    paddingHorizontal: 16,
    backgroundColor: palette.primaryVariant,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    margin: dimensions.spacingSmall,
  },
  headerText: {
    marginStart: 8,
    flex: 1,
    ...typography.title,
    color: palette.textWhite,
  },
});
