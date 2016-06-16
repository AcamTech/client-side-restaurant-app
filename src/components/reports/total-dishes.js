import React, {createClass, PropTypes} from 'react';
import {filter, map, compose, values, flatten, groupBy, reduce} from 'ramda';
import {VictoryPie} from 'victory';

var filterDelivered = filter((item) => item.state == 'DELIVERED');
var getItems = map(item => item.items);
var processItems = compose(
  map(reduce((acc, entry) => {
    var quantity = (acc.quantity || 0) + entry.quantity;
    return {
      name: entry.name + ' ' + quantity,
      quantity: quantity
    }
  }, {})),
  values,
  groupBy(item => item.dishId),
  flatten,
  map(values),
  values,
  getItems,
  filterDelivered
);


export default createClass({
  displayName: 'Dishes-report',
  render(){
    var items = processItems(this.props.orders);
    return (
      <VictoryPie height={300} data={items} x={'name'} y={'name'} />
    );
  }
});