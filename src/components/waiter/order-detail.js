import React, { PropTypes } from 'react';
import {objectToArray} from 'helpers/format-helpers';

export default function OrderDetail ({order, buttons}) {
  return (
    <article className="panel panel--default panel--large" style={{clear: 'both'}}>
      <div className="panel__head">
        <h1 className="panel__title">
          Orden # {order.orderNumber}
        </h1>
      </div>
      <div className="panel__body">
        <ul>
          {
            objectToArray(order.items || {}).map( (item, idx) => {
            return (
              <li key={idx}>
                {item.name} - cantidad: {item.quantity}
                {
                  item.comment ?
                  <p>{item.comment}</p> :
                  null
                }
              </li>
              );
            })
          }
        </ul>
      </div>
      <div className="panel__footer">
        {buttons}
      </div>
    </article>
  );
}
