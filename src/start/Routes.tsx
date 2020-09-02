import React from 'react';
import {
  Route,
  Switch,
  HashRouter,
} from 'react-router-dom';

import routesTemplates from 'routes';
import { GlobalLayout } from 'templates';
import { Error404 } from 'templates/errors';
import Auth from './Auth';

export default function Routes() {
  // use BrowserRouter instead HashRouter to remove #
  return (
    <HashRouter>
      <Switch>
        {
        routesTemplates.map((routesTemplate) => {
          const { routes: appRoutes, template: Template, type } = routesTemplate;
          return appRoutes.map((appRoute) => (
            <Route
              exact={appRoute.exact}
              path={appRoute.path}
              key={appRoute.path}
              render={(route) => (
                <Auth
                  appRoute={appRoute}
                  Template={Template}
                  route={route}
                  type={type}
                />
              )}
            />
          ));
        })
      }
        <Route
          render={(route) => (
            <GlobalLayout
              Component={Error404}
              route={route}
            />
          )}
        />
      </Switch>
    </HashRouter>
  );
}
