import { FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Card, IconButton, ModalTrigger, TextInput } from 'components';
import { ReactWrapper } from 'enzyme';
import { i18n } from 'locale';
import { PlanItem, PlanItemFormData } from 'models';
import { dimensions, palette, typography } from 'styles';
import { ImagePicker } from './components/ImagePicker/ImagePicker';
import { TimeSlider } from './components/TimeSlider/TimeSlider';

interface Props {
  planItem: PlanItem;
  style?: StyleProp<ViewStyle>;
  taskNumber: number;
  formikProps: FormikProps<PlanItemFormData>;
}

export const SimpleTask = (props: Props) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (props.planItem) {
      setTime(props.planItem.time);
    }
  });

  const handleConfirmTimer = (timeValue: number) => {
    setTime(timeValue);
    props.formikProps.values.time = timeValue;
    props.formikProps.submitForm();
  };

  const { values, handleChange, submitForm } = props.formikProps;
  return (
    <SafeAreaView style={props.style}>
      <Card style={[styles.container]}>
        <ImagePicker planItem={props.planItem} />
        <TextInput
          style={styles.imageInputTextContainer}
          textStyle={styles.imageInputText}
          placeholder={i18n.t('planItemActivity:taskNameForChild')}
          value={values.nameForChild}
          onChangeText={handleChange('nameForChild')}
          onEndEditing={submitForm}
        />

        <View style={styles.timerButton}>
          <ModalTrigger
            title={i18n.t('simpleTask:setTimer')}
            modalContent={<TimeSlider min={1} max={60} onConfirm={handleConfirmTimer} savedTime={time} />}
          >
            <IconButton
              name="alarm-off"
              type="material"
              label={i18n.t('planItemActivity:timerButton')}
              containerStyle={styles.iconButtonContainer}
              size={24}
              color={palette.primaryVariant}
              disabled
            />
          </ModalTrigger>
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: dimensions.spacingBig,
    paddingBottom: dimensions.spacingHuge,
    height: '90%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  imageInputTextContainer: {
    marginTop: 53,
    width: 240,
  },
  imageInputText: {
    ...typography.taskInput,
    textAlign: 'center',
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
});
