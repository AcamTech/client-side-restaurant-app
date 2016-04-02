import React, {createClass, PropTypes} from 'react';

const MainLayout = createClass({
  displayName: 'Main-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div className="">
        {this.props.children}
      </div>
    );
  }
});

export default MainLayout;