import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PublicRoute from 'modules/routes/components/public-route/public-route';
import PrivateRoute from 'modules/routes/components/private-route/private-route';
import makePath from 'modules/routes/helpers/make-path';
import COMPONENTS from 'modules/routes/constants/components';
import VIEWS from 'modules/routes/constants/views';

const Routes = () => (
  <Switch>
    <PublicRoute path={makePath(VIEWS.LOGIN)} component={COMPONENTS.LOGIN} />
    <PrivateRoute
      path={makePath(VIEWS.PRODUCTS)}
      component={COMPONENTS.PRODUCTS}
    />
    <Redirect to={makePath(VIEWS.PRODUCTS)} />
  </Switch>
);

export default Routes;
