import Profile from '../pages/Admin/Profile';
import { RouteProperties } from './interfaces';
import Translation from 'pages/Translation';

const routes: RouteProperties[] = [
  {
    component: Profile,
    exact: true,
    path: '/admin/profile',
  },
  {
    component: Translation,
    exact: true,
    path: '/admin/translation',
  },
];

export default routes;
