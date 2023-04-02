import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const key = 'home/editEmployees'

const state = atom({
  key: `${key}/atom`,
  default: {
    showEdit: false,
    employeeId: null
  }
})

const showEdit = selector({
  key: `${key}/selector/showEdit`,
  get: ({ get }) => {
    const { showEdit } = get(state);

    return showEdit ;
  },
});

const employeeId = selector({
  key: `${key}/selector/employeeId`,
  get: ({ get }) => {
    const { employeeId } = get(state);

    return employeeId ;
  },
});

export const selectors = {
  useShowEdit: () => useRecoilValue(showEdit),
  useEmployeeId: () => useRecoilValue(employeeId),
}

export const actions = {
  useSetShowEdit: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback((showEdit, employeeId) => {
      setState((prev) => ({
          ...prev,
          showEdit: showEdit,
          employeeId: employeeId
        })
      )
    }, [setState])
  }),
}
