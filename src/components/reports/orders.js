import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { values, map, prop, sortBy, reduce, filter } from 'ramda';
import { format } from 'date-fns';
import { VictoryPie } from 'victory';
import states from 'constants/states';

var sortByAt = sortBy(prop('at'));
var getDelivered = filter(item => item.state == 'DELIVERED');

function duration(duration) {
  var hours = 0;
  var minutes = 0;
  var seconds = Math.round(duration / 1000);
  var result = '';

  if (seconds > 59) {
    minutes = Math.round(seconds / 60);
    seconds = Math.round(seconds % 60);
  }

  if (minutes > 59) {
    hours = Math.round(hours / 60);
    minutes = Math.round(minutes % 60);
  }

  result += seconds + ' seg.';
  result = minutes ? minutes + ' min. ' : result;
  result = hours ? hours + ' hr. ' : result;

  return result;
}

function setDuration(items) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var nextItem = items[i + 1];
    var newItem = {};
    item.duration = (nextItem && nextItem.at - item.at) || 0;
    item.duracion = duration(item.duration);
    item.estado = states[item.newState];
  }
  return items;
}

function getOrderHistory(order) {
  return values(prop('history', order));
}

function renderOrderGraph(order) {
  var itemsWithDuration = setDuration(sortByAt(getOrderHistory(order)));
  var newItems = itemsWithDuration.slice(0, itemsWithDuration.length - 1);
  return (
    <tr key={order.id}>
      <td>{order.orderNumber}</td>
      <td>{order.table}</td>
      <td>{format(order.createdAt, 'DD/MM/YYYY')}</td>
      <td>{values(order.items).length}</td>
      <td>
        <ul className="list-unstyled text--start flush">
          {map(item => {
            return (
              <li style={{ marginBottom: 0 }}>
                <b>{item.estado}</b>: {item.duracion}
              </li>
            );
          }, newItems)}
        </ul>
      </td>
    </tr>
  );
}

export default class Orders extends Component {
  static displayName = 'Orders-reports';
  static propTypes = {
    orders: PropTypes.object.isRequired
  };
  render() {
    return (
      <table className="table table--hover table--condensed text-center">
        <thead>
          <tr>
            <th>Orden #</th>
            <th>Mesa</th>
            <th>Fecha Creacion</th>
            <th>Items</th>
            <th>Estados</th>
          </tr>
        </thead>
        <tbody>
          {map(renderOrderGraph, getDelivered(values(this.props.orders)))}
        </tbody>
      </table>
    );
  }
}
