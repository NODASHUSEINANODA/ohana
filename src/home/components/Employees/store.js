import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import Employees from "../../datasources/Employees";

const key = 'home/employees'

const state = atom({
  key: `${key}/atom`,
  default: {
    loading: false,
    employees: null,
  }
})

const employees = selector({
  key: `${key}/selector/employees`,
  get: ({ get }) => {
    const { employees } = get(state);

    return employees;
  },
});

export const selectors = {
  useEmployees: () => useRecoilValue(employees),
}

export const actions = {
  useFetchEmployees: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback(async () => {
      setState((prev) => ({ ...prev, loading: true }))
      try {
        const res = await Employees.get()
        setState((prev) => ({ ...prev, employees: res.data }))
      } catch (e) {
        throw e
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }, [setState])
  })
}
