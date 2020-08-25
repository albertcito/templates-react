import Profile from '../pages/Admin/Profile';
import { IRoute } from './interfaces';

const routes: IRoute[] = [
  {
    component: Profile,
    exact: true,
    path: '/admin/profile',
  },
];

export default routes;

