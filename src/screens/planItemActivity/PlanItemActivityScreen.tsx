import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { dimensions, getElevation, palette } from 'styles';
import { FullScreenTemplate, StyledText } from '../../components';

export class PlanItemActivityScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  render() {
    const itemType = this.props.navigation.getParam('itemType');

    return (
      <FullScreenTemplate darkBackground>
        <View>
          <StyledText>{itemType}</StyledText>
        </View>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: dimensions.spacingLarge,
    paddingRight: dimensions.spacingBig,
    backgroundColor: palette.background,
    ...getElevation(5),
  },
});
