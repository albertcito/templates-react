import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import PageProperties from '../../routes/PageProperties';

export default interface LayoutPageProperties {
  Component: React.FC<PageProperties>;
  route: RouteComponentProps<React.ReactNode>;
}
