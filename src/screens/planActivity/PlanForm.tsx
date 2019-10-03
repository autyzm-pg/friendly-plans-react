import { Formik, FormikProps } from 'formik';
import React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Plan } from 'models';
import PlanFormControls from './PlanFormControls';

export interface PlanFormData {
  planInput: string;
}

const FORM_INITIAL_VALUES: PlanFormData = {
  planInput: '',
};

export class PlanForm extends React.PureComponent<NavigationInjectedProps> {
  async createPlan(planInput: string) {
    const { id } = this.props.navigation.getParam('student');

    const plan = await Plan.createPlan(id, planInput);

    this.props.navigation.setParams({ plan });
  }

  onSubmit = ({ planInput }: PlanFormData) => this.createPlan(planInput);

  renderFormControls = (props: FormikProps<PlanFormData>) => <PlanFormControls {...props} />;

  render() {
    return <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={this.onSubmit} render={this.renderFormControls} />;
  }
}

export default withNavigation(PlanForm);
