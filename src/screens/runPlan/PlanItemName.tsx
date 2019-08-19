import React from 'react';
import { StyleSheet } from 'react-native';

import { StyledText } from 'components';
import { typography } from 'styles';

interface Props {
  planItemName: string;
  textSize: string;
  textCase: string;
  textColor: any;
}

export class PlanItemName extends React.PureComponent<Props> {
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
    ? this.props.planItemName
    : this.props.planItemName.toUpperCase()
  }

  render() {
    return (
      <StyledText style={[this.props.textColor, this.labelTextSize()]}>
          {this.getPlanItemDisplayName()}
      </StyledText>
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
});
