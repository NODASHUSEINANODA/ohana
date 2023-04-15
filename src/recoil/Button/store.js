import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'myKey'

// atomは状態を定義するもの
const state = atom({
  // keyは状態のid的なやつで、一意の値にしないとコンソールにエラーが出る
  key: `${key}/atom`,
  // 初期値(サンプルなのでnumberだけだが、本来であればここにコンポーネントごとに管理したい情報を載せる)
  default: {
    number: 0,
  }
})

// selectorは、状態の値や、状態の計算値を返すもの(状態の値を取得する時は、基本selectorから取得する)
// こちらは、状態からnumber属性を返すシンプルなselector
const number = selector({
  // keyはatomの時と同じで、一意の値を設定する
  key: `${key}/selector`,
  // getは、引数に指定したatomの現在値を返す関数(ここでは、get(state)としているので、現在のstateの状態を取得)
  get: ({ get }) => {
    const button = get(state);

    return button.number;
  },
});

// こちらは、number属性の2乗した値を返すselector(状態の計算値)
const numberSquare = selector({
  key: `${key}/selector/square`,
  get: ({ get }) => {
    const button = get(state);

    // ここに状態の計算ロジックを書く
    const square = button.number + 1

    return square;
  },
})

// selectorを一つにまとめてexport
export const selectors = {
  useNumber: () => useRecoilValue(number),
  useSquare: () => useRecoilValue(numberSquare)
}

// 状態を変更する関数をまとめてexport
export const actions = {
  // 現在のnumberに1をプラス
  useAddOneNumber: (() => {
    // useSetRecoilStateは、引数に指定した状態(atom)に新しい値をセットする関数を返す
    const setState = useSetRecoilState(state)

    return React.useCallback(() => {
      // prevには、前回の値が入っている。新しいnumberに元の数字に+1
      setState((prev) => ({ number: prev.number + 1 }));
    }, [setState])
  }),

  useMinusOneNumber: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback(() => {
      setState((prev) => ({ number: prev.number - 1 }));
    }, [setState])
  }),
}
