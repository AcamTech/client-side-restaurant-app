import React, {createClass, PropTypes} from 'react';

const PopoverContent = createClass({
  displayName: 'popover-content',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render () {
    var {children} = this.props;
    return (
      <div className="popover__content">
        {children}
      </div>
    );
  }
});

export default PopoverContent;
