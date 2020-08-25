import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { IRoute } from 'routes/interfaces';
import { isPrivate, routeTypes, isSession } from 'routes/routeTypes';
import { GlobalLayout } from 'templates/';
import { Error403 } from 'templates/errors';
import AppPageInterface from 'templates/interfaces/ILayoutAppPage';
import { GlobalContext } from 'use/global';

interface IAuth {
  appRoute: IRoute;
  Template: React.SFC<AppPageInterface>;
  route: RouteComponentProps<any, any, any>;
  type: routeTypes;
}
const Auth = ({ appRoute, Template, route, type }: IAuth) => {

  const global = React.useContext(GlobalContext);

  if (isPrivate(type) && !global.logged) {
    return <GlobalLayout Component={Error403} route={route} />;
  }
  if (isSession(type) && global.logged) {
    return <Redirect to="/" />
  }

  const Layout = appRoute.template ? appRoute.template : Template;
  return <Layout
    Component={appRoute.component}
    route={route}
  />;
};

export default Auth;
