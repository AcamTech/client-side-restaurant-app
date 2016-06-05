import React, {createClass, PropTypes } from 'react';

const PopoverAction = createClass({
  displayName: 'popover-action',
  propTypes: {
    children: PropTypes.element,
    toggleDropdown: PropTypes.func.isRequired
  },
  defaultAction(){
    return <span className="icon-caret-down"></span>;
  },
  render(){
    var {toggleDropdown, children} = this.props;
    var content = children ? children : this.defaultAction();
    return (
      <div className="popover__action" onClick={toggleDropdown} style={{cursor: 'pointer'}}>{content}</div>
    );
  }
});

export default PopoverAction;
