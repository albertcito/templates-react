import AppPageInterface from './IAppPage';
import ILayoutAppPage from '../templates/interfaces/ILayoutAppPage';
import { routeTypes } from './routeTypes';

export interface IRoute {
  component: React.SFC<AppPageInterface>;
  exact?: boolean;
  params?: {
    [key: string]: any;
  };
  path: string;
  template?: React.SFC<ILayoutAppPage>;
}

export interface IRouteTemplate {
  routes: IRoute[];
  template: React.SFC<ILayoutAppPage>;
  type: routeTypes;
}
