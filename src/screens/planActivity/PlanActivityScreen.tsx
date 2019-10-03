import isEmpty from 'lodash.isempty';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Icon } from 'components';
import { i18n } from 'locale';
import { FloatingAction } from 'react-native-floating-action';
import { getElevation, palette } from 'styles';
import PlanForm from './PlanForm';
import { TaskTable } from './TaskTable';
import { TaskTableHeader } from './TaskTableHeader';

interface State {
  rowList: number[];
}

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    rowList: [],
  };

  handleAddRow = () => {
    this.setState({ rowList: [...this.state.rowList, this.state.rowList.length] });
  };

  render() {
    return (
      <>
        <View style={styles.headerContainer}>
          <PlanForm />
          {!isEmpty(this.state.rowList) && <TaskTableHeader />}
        </View>
        <TaskTable rowList={this.state.rowList} />
        <FloatingAction
          overrideWithAction
          actions={[
            {
              name: 'create-plan',
              icon: <Icon name="add" type="material" color={palette.secondary} size={32} />,
            },
          ]}
          onPressItem={this.handleAddRow}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    ...getElevation(5),
    backgroundColor: palette.background,
  },
});
