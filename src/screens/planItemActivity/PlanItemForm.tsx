import { Formik, FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { IconButton, IconToggleButton, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';
import { ComplexTask } from './ComplexTask';
import { SimpleTask } from './SimpleTask';

export interface PlanItemFormData {
  name: string;
  time: number;
  nameForChild: string;
}

interface Props {
  onSubmit: (formData: PlanItemFormData) => Promise<void>;
  planItem: PlanItem;
  taskNumber: number;
  updatePlanImage: (image: string) => void;
}

interface State {
  taskType: PlanItemType;
}

export class PlanItemForm extends React.PureComponent<Props, State> {
  state: State = {
    taskType: this.props.planItem ? this.props.planItem.type : PlanItemType.SimpleTask,
  };

  initialValues: PlanItemFormData = {
    name: this.props.planItem
      ? this.props.planItem.name
      : `${i18n.t('planItemActivity:newTask')}${this.props.taskNumber}`,
    nameForChild: this.props.planItem ? this.props.planItem.nameForChild : '',
    time: this.props.planItem ? this.props.planItem.time : 0,
  };

  validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    nameForChild: Yup.string(),
    time: Yup.number(),
  });

  isSimpleTask = (): boolean => {
    const { planItem } = this.props;

    return !planItem || planItem.isSimpleTask();
  };

  changePlanItemType = async (isSimpleTask: boolean) => {
    const { planItem } = this.props;
    const type = isSimpleTask ? PlanItemType.SimpleTask : PlanItemType.ComplexTask;

    if (planItem) {
      planItem.changeType(type);
    }

    this.setState({
      taskType: type,
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
            {errors.name && touched.name && <StyledText style={styles.errorMessage}>{errors.name}</StyledText>}
          </View>
          <View style={styles.buttonsContainer}>
            <IconToggleButton
              iconNames={['layers-clear', 'layers']}
              onPress={this.changePlanItemType}
              secondButtonOn={!this.isSimpleTask()}
            />
            <IconButton
              name="mic-off"
              type="material"
              size={24}
              color={palette.primaryVariant}
              containerStyle={styles.iconButtonContainer}
            />
          </View>
        </View>
        {this.state.taskType === PlanItemType.SimpleTask ? (
          <SimpleTask style={styles.simpleTaskContainer} planItem={this.props.planItem} updatePlanImage={this.props.updatePlanImage.bind(this)} formikProps={formikProps} />
        ) : (
          <ComplexTask planItem={this.props.planItem} formikProps={formikProps} updatePlanImage={this.props.updatePlanImage.bind(this)}/>
        )}
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
    ...getElevation(5),
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.spacingHuge,
    backgroundColor: palette.background,
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
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  simpleTaskContainer: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: palette.backgroundSurface,
    paddingHorizontal: dimensions.spacingHuge,
    paddingTop: dimensions.spacingBig,
    paddingBottom: dimensions.spacingHuge,
  },
  errorMessage: {
    color: palette.error,
  },
});
