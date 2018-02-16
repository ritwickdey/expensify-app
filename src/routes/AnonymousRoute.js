import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const AnonymousRoute = ({
  isAuthenticated,
  component: AppComponent,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      !isAuthenticated ? (
        <AppComponent {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(AnonymousRoute);
