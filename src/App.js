import { Router, Outlet } from '@tanstack/react-location';
import { RecoilRoot } from 'recoil';
import Alert from './core/components/Alert';
import { location, routes } from './core/components/Router';

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
