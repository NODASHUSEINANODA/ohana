import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'signin'

// atomは状態を定義するもの
const state = atom({
  // keyは状態のid的なやつで、一意の値にしないとコンソールにエラーが出る
  key: `${key}/atom`,
  // 初期値(サンプルなのでnumberだけだが、本来であればここにコンポーネントごとに管理したい情報を載せる)
  default: {
    email: '',
    password: ''
  }
})

// selectorは、状態の値や、状態の計算値を返すもの(状態の値を取得する時は、基本selectorから取得する)
// こちらは、状態からnumber属性を返すシンプルなselector
const params = selector({
  // keyはatomの時と同じで、一意の値を設定する
  key: `${key}/selector`,
  // getは、引数に指定したatomの現在値を返す関数(ここでは、get(state)としているので、現在のstateの状態を取得)
  get: ({ get }) => {
    return get(state);
  },
});

// selectorを一つにまとめてexport
export const selectors = {
  useParams: () => useRecoilValue(params)
}

// 状態を変更する関数をまとめてexport
export const actions = {
  useSetEmail: (() => {
    // useSetRecoilStateは、引数に指定した状態(atom)に新しい値をセットする関数を返す
    const setState = useSetRecoilState(state)

    return React.useCallback((email) => {
      // prevには、前回の値が入っている。
      setState((prev) => ({ ...prev, email: email }));
    }, [setState])
  }),

  useSetPassword: (() => {
    // useSetRecoilStateは、引数に指定した状態(atom)に新しい値をセットする関数を返す
    const setState = useSetRecoilState(state)

    return React.useCallback((password) => {
      // prevには、前回の値が入っている。
      setState((prev) => ({ ...prev, password: password }));
    }, [setState])
  }),
}
