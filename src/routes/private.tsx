import Profile from '../pages/Admin/Profile';
import { RouteProperties } from './interfaces';

const routes: RouteProperties[] = [
  {
    component: Profile,
    exact: true,
    path: '/admin/profile',
  },
];

export default routes;
