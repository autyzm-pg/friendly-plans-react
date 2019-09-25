import { shallow } from 'enzyme';
import React from 'react';
import { TaskButtons } from '../TaskButtons';

describe('TaskButtons', () => {
  it('renders correctly', () => {
    const taskButtons = shallow(<TaskButtons />);

    expect(taskButtons).toMatchSnapshot();
  });
});
