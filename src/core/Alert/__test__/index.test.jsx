import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { Alert as BootstrapAlert, Button } from 'react-bootstrap';
import { selectors, actions } from '../store';
import Alert from '../index';

describe('Alertコンポーネント', () => {
  // モック関数の戻り値を設定
  beforeEach(() => {
    jest.spyOn(selectors, 'useIsShow').mockReturnValue(true);
    jest.spyOn(selectors, 'useVariant').mockReturnValue('success');
    jest.spyOn(selectors, 'useMessage').mockReturnValue('テストメッセージ');
  })

  it('render correctly', () => {
    // handleCloseが呼ばれた時にモックした関数が返されるようにする
    const setIsNotShow = jest.fn()
    jest.spyOn(actions, 'useIsNotShow').mockReturnValue(setIsNotShow)

    // Alertコンポーネントをshallowレンダリング
    const wrapper = shallow(<Alert />);

    // BootstrapAlertコンポーネントが表示されることを確認
    expect(wrapper.find(BootstrapAlert)).toHaveLength(1);

    // メッセージが表示されることを確認
    expect(wrapper.find('.text-wrap').text()).toEqual('テストメッセージ');

    // クリック時にuseIsNotShow関数が呼ばれることを確認
    wrapper.find(Button).simulate('click');
    expect(setIsNotShow).toHaveBeenCalled();
  });

  describe('does not render when isShow is false', () => {
    // useIsShow関数の戻り値をfalseに設定
    beforeEach(() => {
      jest.spyOn(selectors, 'useIsShow').mockReturnValue(false);
    })

    it('does not render when isShow is false', () => {
      // Alertコンポーネントをshallowレンダリング
      const wrapper = shallow(<Alert />);

      // BootstrapAlertコンポーネントのshowがfalseであることを確認
      expect(wrapper.find(BootstrapAlert).prop('show')).toEqual(false)
    });
  })
});
