import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { NotFoundPage } from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import AnonymousRoute from './AnonymousRoute';

const basename =
  document.getElementsByTagName('base')[0].getAttribute('href') + '#';


export const history = createBrowserHistory({ basename });

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <AnonymousRoute path="/" exact={true} component={LoginPage} />
      <PrivateRoute
        path="/dashboard"
        exact={true}
        component={ExpenseDashboardPage}
      />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" exact={true} component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
