import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = props => (
  <div>
    <button onClick={props.startLogin}>login</button>
  </div>
);

const mapDispathToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispathToProps)(LoginPage);
