import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private info: Don't share</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requriedAuthenticate = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated && <p>You're logged In</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requriedAuthenticate(Info);

// ReactDOM.render(
//   <AdminInfo info="Lorem ipsum amet consectetur." />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Lorem ipsum amet consectetur." />,
  document.getElementById('app')
);
