import React, { PropTypes } from 'react';
import MainNavigationItem from './side-navigation-item';
import {Link} from 'react-router';

export default function SideNavigation ({items}) {
  return (
    <nav className="side-navigation">
      {items.map((item, idx) => (
        <MainNavigationItem key={idx} {...item} />
      ))}
      <MainNavigationItem className="last-item" {...{pathname: '/logout', text: 'Salir', icon: 'icon-exit'}} />
    </nav>
  );
}

SideNavigation.defaultProps = {
  items: []
};

SideNavigation.propTypes = {
  items: PropTypes.array
};
