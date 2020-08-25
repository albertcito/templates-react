import { GlobalLayout } from 'templates';
import { IRouteTemplate } from './interfaces';
import privateRoutes from './private';
import publicRoutes from './public';
import sessionRoutes from './session';
import { routeTypes } from './routeTypes';

const routesTemplate: IRouteTemplate[] = [
  {
    routes: publicRoutes,
    template: GlobalLayout,
    type: routeTypes.public,
  },
  {
    routes: privateRoutes,
    template: GlobalLayout,
    type: routeTypes.private,
  },
  {
    routes: sessionRoutes,
    template: GlobalLayout,
    type: routeTypes.session,
  },
];
export default routesTemplate;
