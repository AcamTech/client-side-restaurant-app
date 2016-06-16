import React, {createClass, PropTypes} from 'react';
import {filter, map, merge, values, reduce, compose, groupBy, prop} from 'ramda';
import {format, min, eachDay} from 'date-fns';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';

var getDelivered = filter((item) => item.state == 'DELIVERED');
var formatDates = map(formatDate);
var groupByDate = groupBy(function(item){return item.date});
var getFormatedItems = compose(
  map(reduce(combineItems, {})),
  values,
  groupByDate,
  formatDates,
  getDelivered,
  values
);

function combineItems(acc, entry){
  return {
    createdAt: entry.createdAt,
    label: (acc.total || 0) + entry.total,
    x: prop('date', entry),
    total: (acc.total || 0) + entry.total
  };
}
function formatDate(item){
  var createdAt = item.createdAt;
  return merge(item, {
    date: format(createdAt, "DD/MM/YYYY")
  });
}

const Sells = createClass({
  render () {
    var {orders} = this.props;
    var formatedItems = getFormatedItems(orders);
    var dates = map((item) => item.createdAt, formatedItems);
    var minDate = min(...dates);
    var ticks = eachDay(
      minDate,
      Date.now()
    );
    console.warn(minDate);
    return (
      <VictoryChart
        height={250}>
        <VictoryAxis
          />
        <VictoryAxis
          dependentAxis
         />
        <VictoryBar data={formatedItems} style={{data: {fill: "gold"}}} y={'total'} />
      </VictoryChart>
    )
  }
});

export default Sells
