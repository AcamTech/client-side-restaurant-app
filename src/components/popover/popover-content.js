import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PopoverContent extends Component {
  displayName = 'popover-content';
  propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    var { children } = this.props;
    return <div className="popover__content">{children}</div>;
  }
}

export default PopoverContent;
