import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { values, map, reduce, groupBy, filter } from 'ramda';
import { format } from 'date-fns';
import {
  VictoryLine,
  VictoryGroup,
  VictoryStack,
  VictoryScatter,
  VictoryBar,
  VictoryChart
} from 'victory';

class Waiters extends Component {
  componentDidMount() {
    this.props.fetchStaff(this.props.restaurantId);
  }
  render() {
    var { orders, staff, fecthStaff } = this.props;

    var _staff = reduce(
      (acc, member) => {
        acc[member.uid] = member.name;
        return acc;
      },
      {},
      values(staff)
    );

    var groupByWaiter = groupBy(function(item) {
      return item.waiter;
    });
    var getDelivered = filter(item => item.state == 'DELIVERED');

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    var groups = groupByWaiter(values(orders));
    var waiters = [];
    var waiter;

    for (var groupName in groups) {
      waiter = { waiterId: groupName };
      waiter.data = values(
        reduce(
          (acc, order) => {
            var date = format(order.createdAt, 'DD/MM/YYYY');
            if (acc[date]) {
              acc[date].y += 1;
            } else {
              acc[date] = {
                x: date,
                y: 1
              };
            }
            return acc;
          },
          {},
          groups[groupName]
        )
      );
      waiters.push(waiter);
    }

    function renderGraphForWaiter(waiter) {
      var color = getRandomColor();
      return (
        <div className="grid__item one-third text-center" key={waiter.waiterId}>
          <VictoryChart>
            <VictoryLine
              data={waiter.data}
              style={{
                data: {
                  stroke: color,
                  strokeWidth: 1
                },
                labels: {
                  fill: color,
                  fontSize: 14,
                  padding: -20,
                  textAnchor: 'end',
                  verticalAnchor: 'end'
                }
              }}
              label={_staff[waiter.waiterId]}
            />
            <VictoryScatter
              data={waiter.data}
              style={{
                data: {
                  stroke: color,
                  strokeWidth: 1
                }
              }}
              data={waiter.data}
            />
          </VictoryChart>
        </div>
      );
    }

    return <div className="grid">{map(renderGraphForWaiter, waiters)}</div>;
  }
}

export default Waiters;
