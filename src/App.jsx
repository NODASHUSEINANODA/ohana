import { RecoilRoot } from "recoil";
import { Alert } from "react-bootstrap";
import Router from "./core/components/Router";

function App() {
  return (
    <RecoilRoot>
      <Router />
      <Alert />
    </RecoilRoot>
  );
}

export default App;
