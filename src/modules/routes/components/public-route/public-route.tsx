import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter, RouteProps } from 'react-router-dom';
import { ReduxStore } from 'types/store'
import { IRoute } from 'types/routes'

import renderMergedProps from 'modules/routes/helpers/render-merged-props';

const PublicRoute = withRouter(
    class extends PureComponent<IRoute, {}> {
        render() {
            const { component, isAuthenticated, ...rest } = this.props;

            return (
                <Route
                    {...rest}
                    render={(routeProps: RouteProps) => {
                        return isAuthenticated ? (
                            <Redirect to="/products" />
                        ) : (
                            renderMergedProps(component, routeProps, rest)
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

export default connect(mapStateToProps)(PublicRoute);
