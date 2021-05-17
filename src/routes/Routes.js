import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConfig from './routeConfig';
function Routes() {
  const { routes } = routeConfig;
  return (
    <Switch>
      {routes.map((route, index) => {
        const { component: Component, path, exact } = route;
        return (
          <Route key={index} path={path} exact>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
}

export default Routes;
