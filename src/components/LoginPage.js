import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__subtitle">Control your expenses</p>
      <button className="btn btn__animate " onClick={props.startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispathToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispathToProps)(LoginPage);
