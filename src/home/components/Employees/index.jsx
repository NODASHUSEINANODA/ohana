import { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { actions, selectors } from './store'
import EditEmployee from '../EditEmployee'
import { actions as EditEmployeeActions } from '../EditEmployee/store'
import { calc_age } from '../../../lib/Date'

const Employees = () => {
  const employees = selectors.useEmployees()
  const fetchEmployees = actions.useFetchEmployees()
  const setShowEdit = EditEmployeeActions.useSetShowEdit()

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return (
    <>
      <Container>
        <h2 className='text-primary'>メンバー一覧</h2>
        <Table responsive='sm' hover striped className='rounded-3 my-2'>
          <thead className='bg-white'>
            <tr>
              <th>名前</th>
              <th>性別</th>
              <th>誕生日</th>
              <th>年齢</th>
              <th>住所</th>
              <th>勤続年数</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {employees && employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td className='align-middle small'>{employee.name}</td>
                  <td className='align-middle small'>{employee.sex}</td>
                  <td className='align-middle small'>{employee.birthday}</td>
                  <td className='align-middle small'>{calc_age(employee.birthday)}</td>
                  <td className='align-middle small'>{employee.address}</td>
                  <td className='align-middle small'>{employee.work_yaer}</td>
                  <td>
                    <Button
                      className='w-100'
                      onClick={() => {
                        setShowEdit(true, index)
                      }}
                    >
                      編集
                    </Button>
                  </td>
                  <td><Button className='w-100'>削除</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
      <EditEmployee />
    </>
  )
}

export default Employees
