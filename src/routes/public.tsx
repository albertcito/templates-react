import Index from '../pages/Index';
import AboutMe from '../pages/AboutMe';
import { RouteProperties } from './interfaces';

const routes: RouteProperties[] = [
  {
    component: Index,
    exact: true,
    path: '/',
  },
  {
    component: AboutMe,
    exact: true,
    path: '/about-me',
  },
];

export default routes;
