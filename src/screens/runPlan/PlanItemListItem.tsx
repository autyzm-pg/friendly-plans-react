import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StyledText } from 'components';
import { PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  render() {
    const { planItem } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <StyledText style={styles.planName}>{planItem.name}</StyledText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 2,
    zIndex: 2,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 6,
    backgroundColor: palette.background,
    alignItems: 'center',
  },
  planName: {
    ...typography.subtitle1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
