import { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { actions, selectors } from './store'
import Employee from '../Employee'
import { selectors as LoginUserSelectors } from '../../../core/components/LoginUser/store'

const Employees = () => {
  const data = selectors.useData()
  const fetchEmployees = actions.useFetchEmployees()
  const currentUser = LoginUserSelectors.useCurrentUser()

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  if (currentUser === null || data[0]?.employee === null) { return null }

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
            {data && data.map((d) => {
              return (
                <Employee open={d.open} employee={d.employee} />
              )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Employees
