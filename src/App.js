import { Router, Outlet, Link } from '@tanstack/react-location';
import { RecoilRoot } from 'recoil';
import Alert from './core/Alert';
import { location, routes } from './core/Router';

const App = () => {
  return (
    <RecoilRoot>
      <Router routes={routes} location={location}>
        {/* パスが一致した際にレンダリングされるコンポーネント */}
        <Outlet />
      </Router>
      <Alert />
    </RecoilRoot>
  );
}

export default App
