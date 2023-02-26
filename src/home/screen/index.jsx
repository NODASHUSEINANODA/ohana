import { Stack } from 'react-bootstrap'
import AddEmployee from "../components/AddEmployee"
import Employees from "../components/Employees"
import SearchCondition from "../components/SearchCondition"
import TopBar from "../components/TopBar"

const Home = () => {
  return (
    <Stack gap={4}>
      <TopBar />
      <AddEmployee />
      <SearchCondition />
      <Employees />
    </Stack>
  )
}

export default Home
