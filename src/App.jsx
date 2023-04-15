// import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./core/components/Router";
import { Alert } from "react-bootstrap";

function
  App() {
  return (
    // <BrowserRouter>
    <RecoilRoot>
      <Router />
      <Alert />
    </RecoilRoot>
    // </BrowserRouter>
  );
}

export default App;
