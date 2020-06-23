import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, ModalTrigger } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { palette } from 'styles';
import { ImagePickerModal } from './ImagePickerModal';

interface Props {
  planItem: PlanItem;
}

export const ImagePicker: SFC<Props> = ({ planItem }) => (
  <View style={styles.container}>
    <ModalTrigger modalContent={<ImagePickerModal planItem={planItem} />} title={i18n.t('planItemActivity:addImage')}>
      <View style={styles.imagePicker}>
        <Icon name="add-a-photo" type="material" size={82} color={palette.textInputPlaceholder} />
      </View>
    </ModalTrigger>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    paddingHorizontal: 85,
    paddingVertical: 67,
  },
});
