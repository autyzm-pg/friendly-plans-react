import { shallow } from 'enzyme';
import React from 'react';
import { ShuffleButton } from '../ShuffleButton';

describe('ShuffleButton', () => {
  it('renders correctly', () => {
    const shuffleButton = shallow(<ShuffleButton />);

    expect(shuffleButton).toMatchSnapshot();
  });
});
