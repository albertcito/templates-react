import IAppPage from '../../routes/IAppPage';
import { RouteComponentProps } from 'react-router-dom';

export default interface ILayoutAppPage {
  Component: React.SFC<IAppPage>;
  route: RouteComponentProps<any, any, any>;
}
