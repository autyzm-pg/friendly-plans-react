import React from 'react';
import { StyleSheet } from 'react-native';

import { Card, FullScreenTemplate, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions } from 'styles';

interface Props {
  planItem: PlanItem;
}

export class ImageLibraryScreen extends React.PureComponent<Props> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:imageLibraryTitle'),
  };

  render() {
    return (
      <FullScreenTemplate darkBackground>
        <Card style={styles.card}>
          <StyledText>Image Library</StyledText>
        </Card>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingExtraLarge,
    height: '78%',
  },
});
