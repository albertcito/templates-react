import PageProperties from './PageProperties';
import LayoutPageProperties from '../templates/interfaces/LayoutPageProperties';
import { RouteTypeEnum } from './routeTypes';

export interface RouteProperties {
  component: React.FC<PageProperties>;
  exact?: boolean;
  params?: {
    [key: string]: any;
  };
  path: string;
  template?: React.FC<LayoutPageProperties>;
}

export interface RouteTemplateProperties {
  routes: RouteProperties[];
  template: React.FC<LayoutPageProperties>;
  type: RouteTypeEnum;
}
