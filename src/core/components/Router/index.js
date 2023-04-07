import { ReactLocation } from '@tanstack/react-location';
import Home from '../../home/screen';
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
