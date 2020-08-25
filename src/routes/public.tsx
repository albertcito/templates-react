import Index from '../pages/Index';
import AboutMe from '../pages/AboutMe';
import { IRoute } from './interfaces';

const routes: IRoute[] = [
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
