import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { navigationMock } from 'helpers';
import { i18n } from 'locale';
import { ModalTemplate } from '../ModalTemplate';

describe('ModalTemplate', () => {
  const content = <Text>content inside modal</Text>;
  const props = {
    onPress: jest.fn(),
    buttonTitle: 'okay',
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<ModalTemplate {...props}>{content}</ModalTemplate>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate back and call onPress on button press', () => {
    const wrapper = shallow(<ModalTemplate {...props}>{content}</ModalTemplate>);
    const button = wrapper.find(`FlatButton[title="${props.buttonTitle}"]`);
    expect(button).toExist();
    button.simulate('press');
    expect(props.onPress).toBeCalled();
    expect(props.navigation.goBack).toBeCalled();
    jest.clearAllMocks();
  });

  it('should navigate back and on cancel button press', () => {
    const wrapper = shallow(<ModalTemplate {...props}>{content}</ModalTemplate>);
    const button = wrapper.find(`FlatButton[title="${i18n.t('common:cancel')}"]`);
    expect(button).toExist();
    button.simulate('press');
    expect(props.onPress).not.toBeCalled();
    expect(props.navigation.goBack).toBeCalled();
  });

  it('it should render with single button with okay label when no additional button provided', () => {
    const wrapper = shallow(<ModalTemplate navigation={props.navigation}>{content}</ModalTemplate>);
    const button = wrapper.find(`FlatButton[title="${i18n.t('common:ok')}"]`);
    expect(button).toExist();
  });
});
