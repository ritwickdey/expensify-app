import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './styles/style.scss';

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
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
