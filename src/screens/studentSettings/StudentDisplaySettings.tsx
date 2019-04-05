import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton } from 'components';
import { Student } from 'models';

interface Props {
  student: Student;
}

export class StudentDisplaySettings extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <IconButton name="image" size={128} />
        <IconButton name="image" size={128} />
        <IconButton name="image" size={128} />
        <IconButton name="image" size={128} />
        <IconButton name="image" size={128} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
