import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default interface PageProperties<T = React.ReactNode> {
  route: RouteComponentProps<T>;
}
