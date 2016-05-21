import React, { PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

export default function AuthLayout ({children}) {
  return (
    <BodyClassName className="body--brand">
      <div className="soft--ends">
        <h1 className="logo--large text-center color-white">ToqueAPP</h1>
        <div className="inner-container">
          {children}
        </div>
      </div>
    </BodyClassName>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};
