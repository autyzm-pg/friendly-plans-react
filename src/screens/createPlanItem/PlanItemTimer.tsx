import React from 'react';

import { Icon } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemTime: string;
}

export class PlanItemTimer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemTime: '',
    };
  }

  render() {
    return <Icon name="timer" size={32} />;
  }
}
