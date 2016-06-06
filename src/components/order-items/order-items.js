import React, { PropTypes } from 'react';
import OrderItem from './order-item';

export default function OrderItems ({items}) {
  return (
    <ul className="order-items">
      {items.map((item, idx) => <OrderItem key={idx} item={item} />)}
    </ul>
  );
}
