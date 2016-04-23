import React, { PropTypes } from 'react';

export default function createRestaurantModalButton ({openCreateRestaurantModal, children}) {
  return (
    <button onClick={openCreateRestaurantModal} className="button">{children}</button>
  );
}

createRestaurantModalButton.propTypes = {
  openCreateRestaurantModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
