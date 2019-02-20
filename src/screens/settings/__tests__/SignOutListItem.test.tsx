import { shallow } from 'enzyme';
import React from 'react';

import { NavigationService } from 'services';
import { SignOutListItem } from '../SignOutListItem';

describe('SignOutListItem', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignOutListItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should open confirmation dialog on press', () => {
    const wrapper = shallow(<SignOutListItem />);
    const spy = jest
      .spyOn(NavigationService, 'navigate')
      .mockImplementation(jest.fn());
    wrapper.simulate('press');
    expect(spy).toBeCalledWith('Dialog', expect.objectContaining({}));
  });

  it('should navigate to unauthenticated view after logout', async () => {
    const wrapper = shallow(<SignOutListItem />);
    const instance = wrapper.instance() as SignOutListItem;
    const spy = jest
      .spyOn(NavigationService, 'navigate')
      .mockImplementation(jest.fn());
    await instance.signOut();
    expect(spy).toBeCalledWith('Unauthenticated');
  });
});
