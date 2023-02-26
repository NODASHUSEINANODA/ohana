import { Router, Outlet, Link } from '@tanstack/react-location';
import { RecoilRoot } from 'recoil';
import { location, routes } from './core/Router';

const App = () => {
  return (
    <RecoilRoot>
      <Router routes={routes} location={location}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="recoil">Recoil Sample</Link>
            </li>
          </ul>
        </div>
        <Outlet /> {/* パスが一致した際にレンダリングされるコンポーネント */}
      </Router>
    </RecoilRoot>
  );
}

export default App
