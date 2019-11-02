import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { ReduxStore } from 'types/store';
import { IRoute } from 'types/routes';

import App from 'modules/app/app';
import makePath from 'modules/routes/helpers/make-path';
import renderMergedProps from 'modules/routes/helpers/render-merged-props';
import VIEWS from 'modules/routes/constants/views';

const PrivateRoute = withRouter(
  class extends PureComponent<IRoute, {}> {
    render() {
      const { component, isAuthenticated, ...rest } = this.props;

      return (
        <Route
          {...rest}
          render={routeProps => {
            return isAuthenticated ? (
              //@ts-ignore
              <App>{renderMergedProps(component, routeProps, rest)}</App>
            ) : (
              <Redirect
                to={{
                  pathname: makePath(VIEWS.LOGIN)
                }}
              />
            );
          }}
        />
      );
    }
  }
);

const mapStateToProps = (state: ReduxStore) => {
  return {
    isAuthenticated: state.auth.signedIn
  };
};

export default connect(mapStateToProps)(PrivateRoute);
