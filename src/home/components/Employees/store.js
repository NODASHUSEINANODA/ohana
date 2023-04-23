import React from "react";
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Employees from "../../datasources/Employees";

const key = 'home/employees'

const state = atom({
  key: `${key}/atom`,
  default: {
    loading: false,
    data: [{
      employee: null,
      open: false,
    }],
  }
})

const data_array = selector({
  key: `${key}/selector/employees`,
  get: ({ get }) => {
    const { data } = get(state);

    return data;
  },
});

export const selectors = {
  useData: () => useRecoilValue(data_array),
}

export const actions = {
  useSetOpen: (() => {
    const [prevState, setState] = useRecoilState(state)

    return React.useCallback((id, open) => {
      const newData = prevState.data.map((prev) => (
        prev.employee.id === id
          ? { employee: prev.employee, open: open }
          : prev
      ))
      console.log('newData')
      console.log(newData)
      setState((prev) => ({ ...prev, data: newData }))
    }, [prevState.data, setState])
  }),

  useFetchEmployees: (() => {
    const setState = useSetRecoilState(state)

    return React.useCallback(async () => {
      setState((prev) => ({ ...prev, loading: true }))
      try {
        const res = await Employees.get()
        const newData = res.data.map((employee) => ({
          employee: employee,
          open: false,
        }))
        setState((prev) => ({ ...prev, data: newData }))
      } catch (e) {
        throw e
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }, [setState])
  }),

  useUpdateEmployee: (() => {
    const [prevState, setState] = useRecoilState(state)

    return React.useCallback(async (id, params) => {
      setState((prev) => ({ ...prev, loading: true }))
      try {
        const res = await Employees.update(id, params)
        const updatedEmployee = res.data

        const newData = prevState.data.map(({ prev_employee }) => (
          prev_employee.id === updatedEmployee.id
            ? { employee: updatedEmployee, open: false }
            : { employee: prev_employee, open: false }
        ))

        setState((prev) => ({ ...prev, data: newData }))
      } catch (e) {
        throw e
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }, [prevState.data, setState])
  }),
}
