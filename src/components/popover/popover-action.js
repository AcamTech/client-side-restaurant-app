import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PopoverAction extends Component {
  defaultAction() {
    return <span className="icon-caret-down" />;
  }

  render() {
    var { toggleDropdown, children } = this.props;
    var content = children ? children : this.defaultAction();
    return (
      <div
        className="popover__action"
        onClick={toggleDropdown}
        style={{ cursor: 'pointer' }}
      >
        {content}
      </div>
    );
  }
}

PopoverAction.displayName = 'popover-action';
PopoverAction.propTypes = {
  children: PropTypes.element,
  toggleDropdown: PropTypes.func.isRequired
};

export default PopoverAction;
