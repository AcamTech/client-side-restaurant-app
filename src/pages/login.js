import React, {createClass} from 'react';
import {Login} from 'containers/login';

const LoginPage = createClass({
  render(){
    return(
      <div className="soft--ends">
        <h1 className="logo--large text-center">ToqueAPP</h1>
        <div className="inner-container">
          <div className="panel panel--medium panel--full-space">
            <Login />
          </div>
        </div>
      </div>
    );
  }
});

export default LoginPage;
