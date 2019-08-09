import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { StyledText } from 'components';
import { PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
}

export class PlanSlideItem extends React.PureComponent<Props> {
  labelTextSize() {
    switch(this.props.textSize){
      case 'xl': return styles.labelTextSizeXL;
      case 'l': return styles.labelTextSizeL;
      case 'm': return styles.labelTextSizeM;
      default: return styles.labelTextSizeS;
    }
  }

  getPlanItemDisplayName() {
    return this.props.textCase == 'standardcase'
    ? this.props.planItem.name
    : this.props.planItem.name.toUpperCase()
  }

  render() {
    return (
          <View style={styles.container} >
            <StyledText style={this.labelTextSize()}>
                {this.getPlanItemDisplayName()}
            </StyledText>
          </View>
    );
  }
}

const styles = StyleSheet.create({

  labelTextSizeS: {
    ...typography.headline6,
  },
  labelTextSizeM: {
    ...typography.headline5,
  },
  labelTextSizeL: {
    ...typography.headline4,
  },
  labelTextSizeXL: {
    ...typography.headline3,
  },
  container: {
    backgroundColor: palette.background,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 0,
  },
});
