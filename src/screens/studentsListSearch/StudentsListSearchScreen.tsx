import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { IconButton, NarrowScreenTemplate, TextInput } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { dimensions, palette, typography } from 'styles';
import { FilterableStudentsList } from './FilterableStudentsList';

interface Props extends NavigationInjectedProps {
  students: Student[];
}

interface State {
  searchQuery: string;
}

export class StudentsListSearchScreen extends React.PureComponent<Props, State> {
  state: State = {
    searchQuery: '',
  };

  onSearch = (searchQuery: string) => {
    this.setState({ searchQuery });
  };

  onSearchInputClear = () => {
    this.setState({ searchQuery: '' });
  };

  renderSearchInput = () => (
    <TextInput
      style={styles.searchInput}
      placeholder={i18n.t('studentsList:search')}
      hideUnderline
      onChangeText={this.onSearch}
      value={this.state.searchQuery}
    />
  );
  renderClearInputButton = () => {
    if (this.state.searchQuery) {
      return (
        <IconButton type="material" name="close" size={24} color={palette.textBody} onPress={this.onSearchInputClear} />
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const students = navigation.getParam('students');

    return (
      <NarrowScreenTemplate
        title={this.renderSearchInput()}
        navigation={navigation}
        buttons={this.renderClearInputButton()}
        isSecondaryView
      >
        <FilterableStudentsList students={students} searchQuery={this.state.searchQuery} />
      </NarrowScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginHorizontal: dimensions.spacingTiny,
  },
});
