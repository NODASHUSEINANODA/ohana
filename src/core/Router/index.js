import { Route, ReactLocation } from '@tanstack/react-location';
import { Home } from '../../Home';
import RecoilButton from '../../recoil/Button';

export const location = new ReactLocation();

export const routes = [
  {
    path: '/',
    element: <Home />,
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
