import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import Auth from '../../datasources/Auth'

const key = 'login_user'

// atomは状態を定義するもの
const state = atom({
  // keyは状態のid的なやつで、一意の値にしないとコンソールにエラーが出る
  key: `${key}/atom`,
  // 初期値(サンプルなのでnumberだけだが、本来であればここにコンポーネントごとに管理したい情報を載せる)
  default: {
    loading: false,
    currentUser: null
  }
})

// selectorは、状態の値や、状態の計算値を返すもの(状態の値を取得する時は、基本selectorから取得する)
// こちらは、状態からnumber属性を返すシンプルなselector
const currentUser = selector({
  // keyはatomの時と同じで、一意の値を設定する
  key: `${key}/selector`,
  // getは、引数に指定したatomの現在値を返す関数(ここでは、get(state)としているので、現在のstateの状態を取得)
  get: ({ get }) => {
    return get(state).currentUser;
  },
});

// selectorを一つにまとめてexport
export const selectors = {
  useCurrentUser: () => useRecoilValue(currentUser)
}

// 状態を変更する関数をまとめてexport
export const actions = {
  useGetCurrentUser: ((showError) => {
    const setState = useSetRecoilState(state)

    return React.useCallback(async () => {
      setState((prev) => ({ ...prev, loading: true }))
      try {
        const res = await Auth.getCurrentUser();
        console.log(res)

        if (res?.status === 200) {
          setState((prev) => ({
            ...prev,
            currentUser: res.data.data
          }))
          console.log(res.data.data);
        } else {
          console.log("no current user");
        }
      } catch (e) {
        setState((prev) => ({ ...prev, currentUser: null }))
        showError(e.message)
        throw e
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }, [setState, showError])
  })
}
