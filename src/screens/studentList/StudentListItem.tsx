import React from 'react';

import { Card, StyledText } from 'components';
import { Student } from 'models';

interface Props {
  student: Student;
}

interface State {
  name: string;
}

export class StudentListItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.student.name,
    };
  }

  render() {
    return (
      <Card>
        <StyledText>{this.state.name}</StyledText>
      </Card>
    );
  }
}
