import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = "signup";

const state = atom({
  key: `${key}/atom`,

  default: {
    name: "",
    email: "",
    address: "",
    password: "",
    passwordConfirmation: "",
    confirmSuccessUrl: "http://localhost:3000",
  },
});

// selectorは、状態の値や、状態の計算値を返すもの（状態の値を取得するときは、基本selectorから取得する）
// こちらは、状態からnumber属性を返すシンプルなselector
const params = selector({
  key: `${key}/selector`,

  get: ({ get }) => {
    return get(state);
  },
});

export const selectors = {
  useParams: () => useRecoilValue(params),
};

//　状態を変更する関数をまとめてexport
export const actions = {
  useSetName: () => {
    const setState = useSetRecoilState(state);

    return React.useCallback((name) => {
        // prebには、前回の値が入っている。
        setState((prev) => ({ ...prev, name: name }));
      }, [setState]
    );
  },

  useSetEmail: () => {
    const setState = useSetRecoilState(state);

    return React.useCallback((email) => {
        // prebには、前回の値が入っている。
        setState((prev) => ({ ...prev, email: email }));
      }, [setState]
    );
  },

  useSetAddress: () => {
    const setState = useSetRecoilState(state);

    return React.useCallback((Address) => {
        // prebには、前回の値が入っている。
        setState((prev) => ({ ...prev, Address: Address }));
      }, [setState]
    );
  },

  useSetPassword: () => {
    const setState = useSetRecoilState(state);

    return React.useCallback((Password) => {
        // prebには、前回の値が入っている。
        setState((prev) => ({ ...prev, Password: Password }));
      }, [setState]
    );
  },

  useSetPasswordConfirmation: () => {
    const setState = useSetRecoilState(state);

    return React.useCallback((PasswordConfirmation) => {
        // prebには、前回の値が入っている。
        setState((prev) => ({ ...prev, PasswordConfirmation: PasswordConfirmation }));
      }, [setState]
    );
  },
};
