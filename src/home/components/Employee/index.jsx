import { Button } from "react-bootstrap";
import { dateToIsoJPStyle, diff_year } from "../../../lib/Date";
import EditEmployee from "../EditEmployee";
import { actions } from "../Employees/store";

const Employee = ({ open, employee }) => {
  const setOpen = actions.useSetOpen()

  return (
    <>
      <tr key={employee.id}>
        <td className='align-middle small'>{employee.name}</td>
        <td className='align-middle small'>{employee.sex}</td>
        <td className='align-middle small'>{dateToIsoJPStyle(employee.birthday)}</td>
        <td className='align-middle small'>{diff_year(employee.birthday)}歳</td>
        <td className='align-middle small'>{employee.address}</td>
        <td className='align-middle small'>{diff_year(employee.joined_at)}年</td>
        <td>
          <Button
            className='w-100'
            onClick={() => {
              // 表示させたい
              setOpen(employee.id, true)
            }}
          >
            編集
          </Button>
        </td>
        <td><Button className='w-100'>削除</Button></td>
      </tr>
      <EditEmployee open={open} employee={employee} />
    </>
  );
}

export default Employee