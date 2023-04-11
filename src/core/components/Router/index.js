import { ReactLocation } from '@tanstack/react-location';
import Home from '../../../home/screen';
import SignIn from '../../../auth/components/SignIn'
import SignUp from '../../../auth/components/SignUp'
import RecoilButton from '../../../recoil/Button';

export const location = new ReactLocation();

export const routes = [
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
