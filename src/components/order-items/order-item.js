import PropTypes from 'prop-types';
import React from 'react';

export default function OrderItem ({item}) {
  return (
    <li key={item.name} index={item.name} className="order-items__item">
      <p className="order-items__item-title">
        <span className="order-items__item-quantity">{item.quantity}</span>
        <span className="order-items__item-name">{item.name}</span>
      </p>
      {item.comment ?
        (<p className="order-items__item-comment">{item.comment}</p>)
      : ''}
    </li>
  );
}
