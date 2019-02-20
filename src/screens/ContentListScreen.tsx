import React from 'react';
import FastImage from 'react-native-fast-image';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { headerStyle } from 'styles';

export class ContentListScreen extends React.PureComponent {
  static navigationOptions = {
    title: i18n.t('content:contentList'),
    headerTitleStyle: headerStyle.headerText,
  };

  render() {
    const imageNo = Math.floor(Math.random() * 11);
    return (
      <FullScreenTemplate>
        <FastImage
          style={{ height: '100%' }}
          source={{
            uri: `https://unsplash.it/400/700?image=${imageNo}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </FullScreenTemplate>
    );
  }
}
