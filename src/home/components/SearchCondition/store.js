import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'home/searchCondition'

const state = atom({
  key: `${key}/atom`,
  default: {
    name: "",
    sex: "",
    birthday: "",
    address: "",
    work_yaer: null,
    phone_number: "",
    is_admin: false,
    admin_mail_address: "",
    searched: false,
  }
})

const searched = selector({
  key: `${key}/selector/searched`,
  get: ({ get }) => {
    const currectState = get(state);

    return currectState.searched ;
  },
});

const phoneNumberIsInvalid = selector({
  key: `${key}/selector/phoneNumber/validate`,
  get: ({ get }) => {
    const { phone_number } = get(state);
    const phoneNumberRegex = /^\d{10}$|^\d{11}$/
    if(phone_number === '') { return false }
    if(!phoneNumberRegex.test(phone_number)) { return true }

    return false ;
  },
});

export const selectors = {
  useSearched: () => useRecoilValue(searched),
  usePhoneNumberIsInvalid: () => useRecoilValue(phoneNumberIsInvalid),
}

export const actions = {
  useSetName: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((name) => {
      setState((prev) => ({ ...prev, name: name }))
    }, [setState])
  }),

  useSetSex: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((sex) => {
      setState((prev) => ({ ...prev, sex: sex }))
    }, [setState])
  }),

  useSetBirthday: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((birthday) => {
      setState((prev) => ({ ...prev, birthday: birthday }))
    }, [setState])
  }),

  useSetAddress: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((address) => {
      setState((prev) => ({ ...prev, address: address }))
    }, [setState])
  }),

  useSetWorkYaer: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((workYaer) => {
      setState((prev) => ({ ...prev, work_yaer: workYaer }))
    }, [setState])
  }),

  useSetPhoneNumber: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((phoneNumber) => {
      setState((prev) => ({ ...prev, phone_number: phoneNumber }))
    }, [setState])
  }),

  useSetIsAdmin: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((isAdmin) => {
      setState((prev) => ({ ...prev, is_admin: isAdmin }))
    }, [setState])
  }),

  useSetAdminMailAddress: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((adminMailAddress) => {
      setState((prev) => ({ ...prev, admin_mail_address: adminMailAddress }))
    }, [setState])
  }),

  useSearch: (() => {
    const setState = useSetRecoilState(state)
    const stateValue = useRecoilValue(state)

    return React.useCallback(() => {
      // TODO: API側ができたらリクエストを送信して、状態変化させる
      console.log('検索しました')
      console.log(stateValue)
      setState((prev) => ({ ...prev, searched: true }))
    }, [setState, stateValue])
  })
}
