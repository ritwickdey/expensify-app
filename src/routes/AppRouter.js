import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { Header } from '../components/Header';
import { HelpExpensePage } from '../components/HelpExpensePage';
import { NotFoundPage } from '../components/NotFoundPage';

const base = document.getElementsByTagName('base')[0].getAttribute('href');

export const AppRouter = () => (
  <BrowserRouter basename={base}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" exact={true} component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
