import React, { PropTypes } from 'react';
import { OrderItems } from 'components/order-items';
import {objectToArray} from 'helpers/format-helpers';

export default function OrderDetail ({order, buttons}) {
  return (
    <article className="panel panel--large" style={{clear: 'both'}}>
      <div className="panel__head">
        <h1 className="panel__title">
          Orden # {order.orderNumber}
        </h1>
      </div>
      <div className="">
        <OrderItems items={objectToArray(order.items || {})} />
      </div>
      <div className="panel__footer">
        {buttons}
      </div>
    </article>
  );
}
