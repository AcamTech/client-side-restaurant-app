import React, {createClass, PropTypes} from 'react';
import {values, map, reduce, groupBy, filter} from 'ramda';
import {format} from 'date-fns';
import {VictoryLine, VictoryGroup, VictoryStack, VictoryScatter, VictoryBar, VictoryChart} from 'victory';

const Dishes = createClass({
  render () {
    var {orders} = this.props;
    var groupByName = groupBy(function(item){return item.name});
    var getDelivered = filter((item) => item.state == 'DELIVERED');

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    console.log(orders);

    var items = reduce((acc, order) => {
      var orderItems = map((item) => {
        return {
          name: item.name,
          date: format(order.createdAt, "DD/MM/YYYY"),
          quantity: item.quantity,
          x: format(order.createdAt, "DD/MM/YYYY")
        }
      }, order.items);
      return acc.concat(values(orderItems));
    }, [], getDelivered(values(orders)));

    var groups = groupByName(items);
    var dishes  = [];
    var dish;

    for (var groupName in groups) {
      dish = { name: groupName };
      dish.data = values(reduce((acc, item) => {
        if (acc[item.date]) {
          acc[item.date].y += item.quantity;
        } else {
          acc[item.date] = {
            x: item.date,
            y: item.quantity
          }
        }
        return acc;
      }, {}, groups[groupName]));
      dishes.push(dish);
    }

    function renderGraphForDish(dish) {
      var color = getRandomColor();
      return (
        <div className="grid__item one-third text-center" key={dish.name}>
          <VictoryChart>
            <VictoryLine data={dish.data} style={{
              data: {
                stroke: color,
                strokeWidth: 1
              },
              labels: {
                fill: color,
                fontSize: 14,
                padding: -20,
                textAnchor: "end",
                verticalAnchor: "end"
              }
            }} label={dish.name} />
            <VictoryScatter data={dish.data}
              style={{
                data: {
                  stroke: color,
                  strokeWidth: 1
                }
              }}
              data={dish.data} />
          </VictoryChart>
        </div>
      );
    }

    return (
      <div className="grid">
        {map(renderGraphForDish, dishes)}
      </div>
    )
  }
});

export default Dishes;
