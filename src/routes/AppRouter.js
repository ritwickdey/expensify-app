import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { HelpExpensePage } from '../components/HelpExpensePage';
import { NotFoundPage } from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const base = document.getElementsByTagName('base')[0].getAttribute('href');

export const AppRouter = () => (
  <Router history={history} basename={base}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <PrivateRoute
          path="/dashboard"
          exact={true}
          component={ExpenseDashboardPage}
        />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute
          path="/edit/:id"
          exact={true}
          component={EditExpensePage}
        />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
