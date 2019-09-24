import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlatButton, Icon, TextInput } from '../../components';

export class ActivityPlanScreen extends React.PureComponent {
  render() {
    return (
      <View style={style.container}>
        <Icon name="emoticon-happy-outline" size={24} />
        <TextInput placeholder="Wpisz nazwę planu" />
        <FlatButton
          title="TASUJ ZADANIA"
          icon={{
            name: 'shuffle',
            type: 'material-community-icons',
            size: 14,
          }}
        />
        <Icon name="play" type="antdesign" size={24} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
  },
});
