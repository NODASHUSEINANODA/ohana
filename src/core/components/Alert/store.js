import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'alert'

const state = atom({
  key: `${key}/atom`,
  default: {
    isShow: false,
    variant: '',
    message: ''
  }
})

const isShow = selector({
  key: `${key}/selector/show`,
  get: ({ get }) => {
    const { isShow } = get(state);

    return isShow;
  },
});

const variant = selector({
  key: `${key}/selector/variant`,
  get: ({ get }) => {
    const { variant } = get(state);

    return variant;
  },
});

const message = selector({
  key: `${key}/selector/message`,
  get: ({ get }) => {
    const { message } = get(state);

    return message;
  },
});

export const selectors = {
  useIsShow: () => useRecoilValue(isShow),
  useVariant: () => useRecoilValue(variant),
  useMessage: () => useRecoilValue(message),
}

export const actions = {
  usePrimaryShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'primary',
        message: message,
      }));
    }, [setState])
  }),

  useSecondaryShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'secondary',
        message: message,
      }));
    }, [setState])
  }),

  useSuccessShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'success',
        message: message,
      }));
    }, [setState])
  }),

  useDangerShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'danger',
        message: message,
      }));
    }, [setState])
  }),

  useWarningShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'warning',
        message: message,
      }));
    }, [setState])
  }),

  useInfoShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'info',
        message: message,
      }));
    }, [setState])
  }),

  useLightShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'light',
        message: message,
      }));
    }, [setState])
  }),

  useDarkShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((message) => {
      setState(() => ({
        isShow: true,
        variant: 'dark',
        message: message,
      }));
    }, [setState])
  }),

  useIsNotShow: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback(() => {
      setState(() => ({
        isShow: false,
        variant: '',
        message: '',
      }));
    }, [setState])
  })
}
