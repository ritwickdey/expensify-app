import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = props => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" exact={true} activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Header));
