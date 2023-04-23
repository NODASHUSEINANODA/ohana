import { RecoilRoot } from "recoil";
import Router from "./core/components/Router";
import Alert from "./core/components/Alert";

function App() {
  return (
    <RecoilRoot>
      <Router />
      <Alert />
    </RecoilRoot>
  );
}

export default App;
