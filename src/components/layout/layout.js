import React, { PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import { HeaderContainer } from 'containers/restaurant-header';

export default function Layout ({children, restaurantId}) {
  return (
    <div className={"layout full-height"}>
      <HeaderContainer restaurantId={restaurantId} className="layout__header" />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  restaurantId: PropTypes.string.isRequired
};
