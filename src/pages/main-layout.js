import React, {createClass, PropTypes} from 'react';

const MainLayout = createClass({
  displayName: 'Main-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div className="main-layout full-height">
        {this.props.children}
      </div>
    );
  }
});

export default MainLayout;
