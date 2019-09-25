import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Icon } from 'components';
import { PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemName: string;
}

export class PlanItemHeader extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemName: props.planItem.name,
    };
  }

  handleNameChange = (itemName: string) => this.setState({ itemName });

  updatePlanItemName = () => {
    this.props.planItem.update({
      name: this.state.itemName,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name="text" size={32} iconStyle={styles.icon} />
        <TextInput
          value={this.state.itemName}
          style={styles.input}
          onEndEditing={this.updatePlanItemName}
          onChangeText={this.handleNameChange}
          underlineColorAndroid={palette.primaryVariant}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: 12,
  },
  input: {
    height: 42,
    ...typography.headline6,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
    marginEnd: 120,
  },
});
