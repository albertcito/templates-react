import { RouteComponentProps } from 'react-router-dom';

import IAppPage from '../../routes/IAppPage';

export default interface ILayoutAppPage {
  Component: React.SFC<IAppPage>;
  route: RouteComponentProps<any, any, any>;
}
