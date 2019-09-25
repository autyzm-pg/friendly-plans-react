import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, TextInput } from '../../components';

export class PlanInput extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="emoticon-happy-outline" size={24} color="#C8CBFA" />
        <TextInput placeholder="Wpisz nazwę planu" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '40%',
  },
});
