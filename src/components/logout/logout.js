import PropTypes from 'prop-types';
import React, { createClass } from 'react';

class Logout extends React.Component {
  static displayName = 'Logout';

  static propTypes = {
    unauth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.unauth();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Saliendo...</h1>
      </div>
    );
  }
}

export default Logout;
