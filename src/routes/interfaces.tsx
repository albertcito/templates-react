import React from 'react';

import PageProperties from './PageProperties';
import LayoutPageProperties from '../templates/interfaces/LayoutPageProperties';
import { RouteTypeEnum } from './routeTypes';

export interface RouteProperties {
  component: React.FC<PageProperties>;
  exact?: boolean;
  params?: {
    // To be solve, it's the URL params
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
