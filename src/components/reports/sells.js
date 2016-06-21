import React, {createClass, PropTypes} from 'react';
import {filter, map, merge, values, reduce, compose, groupBy, prop} from 'ramda';
import {format, min, eachDay} from 'date-fns';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';
import FormatHelpers from 'helpers/format-helpers';

var getDelivered = filter((item) => item.state == 'DELIVERED');
var formatDates = map(formatDate);
var groupByDate = groupBy(function(item){return item.date});
var getFormatedItems = compose(
  map(item => merge(item, {label: FormatHelpers.formatPrice(item.total)})),
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
    return (
      <div>
        <div style={{maxWidth: '450px'}}>
          <VictoryChart
            height={300}
            domainPadding={{x: 10}}
            >
            <VictoryAxis
              label="Precio Total"
              style={{
                grid: {
                  stroke: "grey",
                  strokeWidth: 1
                },
                axis: {stroke: "grey"},
                ticks: {stroke: "transparent"}
              }}
              dependentAxis
             />
            <VictoryAxis
              label="Fecha"
              />
            <VictoryBar data={formatedItems} style={{data: {fill: "gold"}}} y={'total'} />
          </VictoryChart>
        </div>
        <table className="table table--hover table--condensed text-center">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {map(item => {
              return (
                <tr>
                  <td>{item.x}</td>
                  <td>{item.label}</td>
                </tr>
              );
            }, formatedItems)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default Sells
