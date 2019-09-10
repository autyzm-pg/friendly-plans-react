import React from 'react';

import { Icon } from 'components';
import { PlanItem } from 'models';

interface Props {
  planItem: PlanItem;
  onChange: (lector: boolean) => void;
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

  handleLectorChange = () => {
    this.props.onChange(!this.props.planItem.lector);
  }

  render() {
    const { lector } = this.props.planItem;
    const chosenIcon = lector ? 'volume-high': 'volume-mute';
    return <Icon onPress={this.handleLectorChange} name={chosenIcon} size={64} />;
  }
}
