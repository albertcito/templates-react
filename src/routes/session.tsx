import Login from '../pages/Login';
import { IRoute } from './interfaces';

const routes: IRoute[] = [
  {
    component: Login,
    exact: true,
    path: '/login',
  },
];

export default routes;
