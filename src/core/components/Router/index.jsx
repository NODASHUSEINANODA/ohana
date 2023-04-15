import { Outlet, ReactLocation, Router as LocationRouter } from '@tanstack/react-location';
import Home from '../../../home/screen';
import SignIn from '../../../auth/components/SignIn'
import SignUp from '../../../auth/components/SignUp'
import RecoilButton from '../../../recoil/Button';
import { useEffect } from 'react';
import { actions, selectors } from '../LoginUser/store';

const Router = () => {
  const currentUser = selectors.useCurrentUser()
  const getCurrentUser = actions.useGetCurrentUser()
  // const navigate = useNavigate()
  const location = new ReactLocation();
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: 'recoil',
      children: [
        {
          path: '/',
          element: <RecoilButton />
        },
      ],
    },
  ];

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  if (!currentUser) {
    console.log('hoge')
    // navigate({ to: '/signin', replace: true })
    // return (<Navigate to='/login' />)
  } else {
    console.log(currentUser)
  }

  return (
    <LocationRouter routes={routes} location={location}>
      {/* パスが一致した際にレンダリングされるコンポーネント */}
      <Outlet />
    </LocationRouter>
  )
}

export default Router

