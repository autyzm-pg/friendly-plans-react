import { shallow } from 'enzyme';
import React from 'react';
import { NavigationContainerComponent } from 'react-navigation';

import * as locale from 'locale';
import { NavigationService } from 'services';
import App from '../App';

// @ts-ignore
locale.i18n = jest.fn();

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set top level navigator ref', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance() as App;
    const navigator = {};
    const spy = jest
      .spyOn(NavigationService, 'setTopLevelNavigator')
      .mockImplementationOnce(() => null);
    instance.setNavigationRef(navigator as NavigationContainerComponent);
    expect(spy).toHaveBeenCalledWith(navigator);
  });
});
