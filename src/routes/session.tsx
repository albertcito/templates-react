import Login from '../pages/Login';
import { RouteProperties } from './interfaces';

const routes: RouteProperties[] = [
  {
    component: Login,
    exact: true,
    path: '/login',
  },
];

export default routes;
