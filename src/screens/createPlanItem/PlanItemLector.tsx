import React from 'react';

import { Icon } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
}

interface State {
  itemTime: string;
}

export class PlanItemLector extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemTime: '',
    };
  }

  render() {
    return <Icon name="volume-high" size={32} />;
  }
}
