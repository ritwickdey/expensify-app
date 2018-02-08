import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => <p>This is from dashboard Component</p>;

const AddExpensePage = () => <p>This is from Create Component</p>;

const EditExpensePage = () => <p>This is from Edit Component</p>;

const HelpExpensePage = () => <p>This is from help Component</p>;

const NotFoundPage = () => (
  <p>
    404! Not Found <Link to="/">Go To Homepage</Link>
  </p>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
