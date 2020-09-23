import { IconButton } from 'components';
import { i18n } from 'locale';
import { noop } from 'lodash';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import React, { SFC , useState } from 'react';
import { ImageBackground, Button, StyleSheet, View, ScrollView, Text, TouchableOpacity, CheckBox } from 'react-native';
import { NavigationService } from 'services';
import { dimensions, palette } from 'styles';
import { ImageAction } from './ImageAction';
import ImagePicker from 'react-native-image-crop-picker';
import { PlanElementListItem } from 'screens/runPlan/ListMode/PlanElementListItem';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import NotificationSounds, {playSampleSound} from "react-native-notification-sounds";


interface Props {
  //closeModal: () => void;
  soundsList;
}3

export const AlarmSoundSettingModal: SFC<Props> = ({ soundsList }) => {
    const handleClick = (key) => {
      playSampleSound(soundsList[key]);
    }    
    
    return (
    <View style={styles.imageActionContainer}>
        <ScrollView nestedScrollEnabled={true}>
        {
          soundsList.map(( item, key ) =>
          (
            <View key = { key }>
              <TouchableOpacity onPress={() => handleClick(key)}>
                <View>
                  <Text style={styles.text}>{ item.title }</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        }
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: dimensions.spacingLarge,
    height: 150,
  },

  text: {
    fontSize: 18,
    color: 'black',
    padding: 15,
  }
});
