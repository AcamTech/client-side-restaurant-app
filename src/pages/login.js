import React, {createClass} from 'react';
import {Login} from 'containers/login';

const LoginPage = createClass({
  render(){
    return(
      <div className="panel panel--medium panel--full-space">
        <Login />
      </div>
    );
  }
});

export default LoginPage;
