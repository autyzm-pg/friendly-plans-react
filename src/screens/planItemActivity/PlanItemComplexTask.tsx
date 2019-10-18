import React from 'react';
import { View } from 'react-native';

import { StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

export class PlanItemComplexTask extends React.PureComponent<Props> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  render() {
    return (
      <View>
        <StyledText>Complex Task</StyledText>
      </View>
    );
  }
}
