import React, {createClass, PropTypes} from 'react';

const Logout = React.createClass({
  displayName: 'Logout',
  propTypes: {
    unauth: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.unauth();
  },
  render () {
    return (
      <div>
        <h1 className="text-center">Saliendo...</h1>
      </div>
    );
  }
});

export default Logout;
