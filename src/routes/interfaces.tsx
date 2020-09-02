import AppPageInterface from './PageProperties';
import LayoutPageProperties from '../templates/interfaces/LayoutPageProperties';
import { RouteTypeEnum } from './routeTypes';

export interface RouteProperties {
  component: React.SFC<AppPageInterface>;
  exact?: boolean;
  params?: {
    [key: string]: any;
  };
  path: string;
  template?: React.SFC<LayoutPageProperties>;
}

export interface RouteTemplateProperties {
  routes: RouteProperties[];
  template: React.SFC<LayoutPageProperties>;
  type: RouteTypeEnum;
}
