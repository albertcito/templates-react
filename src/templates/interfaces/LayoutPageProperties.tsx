import { RouteComponentProps } from 'react-router-dom';

import PageProperties from '../../routes/PageProperties';

export default interface LayoutPageProperties {
  Component: React.SFC<PageProperties>;
  route: RouteComponentProps<any, any, any>;
}
