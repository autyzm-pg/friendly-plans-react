import { Formik, FormikProps } from 'formik';
import React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { ModelSubscriber, Plan } from 'models';
import { PlanFormControls } from './PlanFormControls';

export interface PlanFormData {
  planInput: string;
}

interface State {
  plan: Plan;
}

const FORM_INITIAL_VALUES: PlanFormData = {
  planInput: '',
};

export class PlanForm extends React.PureComponent<NavigationInjectedProps, State> {
  plansSubscriber: ModelSubscriber<Plan> = new ModelSubscriber();

  state: State = {
    plan: new Plan(),
  };

  async setPlanState(planInput: string) {
    const { id } = this.props.navigation.getParam('student');

    const plan = await Plan.create(id, planInput);

    this.setState({ plan });
  }

  onSubmit = ({ planInput }: PlanFormData) => this.setPlanState(planInput);

  renderFormControls = (props: FormikProps<PlanFormData>) => <PlanFormControls {...props} plan={this.state.plan} />;

  render() {
    return <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={this.onSubmit} render={this.renderFormControls} />;
  }
}

export default withNavigation(PlanForm);
