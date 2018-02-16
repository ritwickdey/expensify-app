import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = props => (
  <header className="header">
    <div className="container">
      <div className="header__container">
        <Link className="header__title" to="/dashboard" exact="true">
          <h1>Expensify</h1>
        </Link>
        <button className="btn btn__link" onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Header));
