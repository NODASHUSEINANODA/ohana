import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'home/addEmployee'

const state = atom({
  key: `${key}/atom`,
  default: {
    name: "",
    sex: "invalid",
    birthday: "",
    address: "",
    joined_at: "",
    phone_number: "",
    is_admin: false,
    admin_mail_address: "",
    submited: false,
  }
})

const isAdmin = selector({
  key: `${key}/selector/isAdmin`,
  get: ({ get }) => {
    const currectState = get(state);

    return currectState.is_admin ;
  },
});

const submited = selector({
  key: `${key}/selector/submited`,
  get: ({ get }) => {
    const currectState = get(state);

    return currectState.submited ;
  },
});

const nameIsInvalid = selector({
  key: `${key}/selector/name/validate`,
  get: ({ get }) => {
    const { name } = get(state);
    if (name === "") { return true }

    return false ;
  },
});

const sexIsInvalid = selector({
  key: `${key}/selector/sex/validate`,
  get: ({ get }) => {
    const { sex } = get(state);
    if (sex === "invalid") { return true }

    return false ;
  },
});

const birthdayIsInvalid = selector({
  key: `${key}/selector/birthday/validate`,
  get: ({ get }) => {
    const { birthday } = get(state);
    if (birthday === "") { return true }

    return false ;
  },
});

const addressIsInvalid = selector({
  key: `${key}/selector/address/validate`,
  get: ({ get }) => {
    const { address } = get(state);
    if (address === "") { return true }

    return false ;
  },
});

const joinedAtIsInvalid = selector({
  key: `${key}/selector/joinedAt/validate`,
  get: ({ get }) => {
    const { joined_at } = get(state);
    if (joined_at === "") { return true }

    return false;
  },
});

const phoneNumberIsInvalid = selector({
  key: `${key}/selector/phoneNumber/validate`,
  get: ({ get }) => {
    const { phone_number } = get(state);
    const phoneNumberRegex = /^\d{10}$|^\d{11}$/
    if (!phoneNumberRegex.test(phone_number)) { return true }

    return false ;
  },
});

const adminMailAddressIsInvalid = selector({
  key: `${key}/selector/adminMailAddress/validate`,
  get: ({ get }) => {
    const { admin_mail_address, is_admin } = get(state);
    const adminMailAddressRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (is_admin === false) { return false }
    if (!adminMailAddressRegex.test(admin_mail_address)) { return true }

    return false ;
  },
});

export const selectors = {
  useIsAdmin: () => useRecoilValue(isAdmin),
  useSubmited: () => useRecoilValue(submited),
  useSexIsInvalid: () => useRecoilValue(sexIsInvalid),
  useNameIsInvalid: () => useRecoilValue(nameIsInvalid),
  useBirthdayIsInvalid: () => useRecoilValue(birthdayIsInvalid),
  useAddressIsInvalid: () => useRecoilValue(addressIsInvalid),
  useJoinedAtIsInvalid: () => useRecoilValue(joinedAtIsInvalid),
  usePhoneNumberIsInvalid: () => useRecoilValue(phoneNumberIsInvalid),
  useAdminMailAddressIsInvalid: () => useRecoilValue(adminMailAddressIsInvalid),
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

  useSetJoinedAt: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((joinedAt) => {
      setState((prev) => ({ ...prev, joined_at: joinedAt }))
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

  useSetTrueSubmited: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback(() => {
      setState((prev) => ({ ...prev, submited: true }))
    }, [setState])
  })
}
