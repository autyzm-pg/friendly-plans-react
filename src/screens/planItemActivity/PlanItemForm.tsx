import { Formik, FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Card, IconButton, IconToggleButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';
import { PlanItemComplexTask } from './PlanItemComplexTask';
import { PlanItemSimpleTask } from './PlanItemSimpleTask';

export interface PlanItemFormData {
  name: string;
  nameForChild: string;
}

interface Props {
  onSubmit: (formData: PlanItemFormData) => Promise<void>;
  planItem: PlanItem;
}

interface State {
  taskType: PlanItemType;
}

export class PlanItemForm extends React.PureComponent<Props, State> {
  state: State = {
    taskType: PlanItemType.SimpleTask,
  };

  initialValues: PlanItemFormData = {
    name: this.props.planItem ? this.props.planItem.name : '',
    nameForChild: this.props.planItem ? this.props.planItem.nameForChild : '',
  };

  validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    nameForChild: Yup.string(),
  });

  changePlanItemType = (isSimpleTask: boolean) => {
    this.setState({
      taskType: isSimpleTask ? PlanItemType.SimpleTask : PlanItemType.ComplexTask,
    });
  };

  renderFormControls = (formikProps: FormikProps<PlanItemFormData>) => {
    const { values, handleChange, submitForm, errors, touched } = formikProps;

    return (
      <>
        <View style={styles.subHeaderContainer}>
          <View>
            <TextInput
              style={styles.textInputContainer}
              textStyle={styles.textInput}
              placeholder={i18n.t('planItemActivity:taskNamePlaceholder')}
              value={values.name}
              onChangeText={handleChange('name')}
              onEndEditing={submitForm}
            />
            {errors.name && touched.name ? <StyledText style={styles.errorMessage}>{errors.name}</StyledText> : null}
          </View>
          <View style={styles.buttonsContainer}>
            <IconToggleButton iconNames={['layers-clear', 'layers']} onPress={this.changePlanItemType} />
            <IconButton
              name="mic-off"
              type="material"
              size={24}
              color={palette.primaryVariant}
              containerStyle={styles.iconButtonContainer}
            />
          </View>
        </View>
        <Card style={styles.card}>
          {this.state.taskType === PlanItemType.SimpleTask ? (
            <PlanItemSimpleTask planItem={this.props.planItem} formikProps={formikProps} />
          ) : (
            <PlanItemComplexTask planItem={this.props.planItem} />
          )}
        </Card>
      </>
    );
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.props.onSubmit}
        render={this.renderFormControls}
      />
    );
  }
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.spacingExtraLarge,
    backgroundColor: palette.background,
    ...getElevation(5),
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    ...typography.subtitle,
  },
  textInputContainer: {
    width: 288,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: dimensions.spacingBig,
    marginHorizontal: dimensions.spacingExtraLarge,
    height: '78%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
  errorMessage: {
    color: palette.error,
  },
});
