import React, {createClass} from 'react';
import {values, map, prop, sortBy, reduce} from 'ramda';
import {VictoryPie} from 'victory';
import states from 'constants/states';

var sortByAt = sortBy(prop('at'));

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
  result = (minutes) ? minutes + ' min. ' : result;
  result = (hours) ? hours + ' hr. ' : result;

  return result;
}

function setDuration(items){
  for(var i = 0; i < items.length; i++){
    var item = items[i];
    var nextItem = items[i + 1];
    item.duration = (nextItem && nextItem.at - item.at) || 0;
    item.label = states[item.newState] + '\n durante ' + duration(item.duration);
  }
  return items;
}

function getOrderHistory(order){
  return values(prop('history', order));
}

function renderOrderGraph(order){
  var itemsWithDuration = setDuration(sortByAt(getOrderHistory(order)));
  var newItems = itemsWithDuration.slice(0, itemsWithDuration.length - 1);
  return <VictoryPie innerRadius={110} key={order.id} data={newItems} x={'label'} y={'duration'} />;
}


export default createClass({
  displayName: 'Orders-reports',
  render(){
    return (
      <div>
        {map(renderOrderGraph, values(this.props.orders))}
      </div>
    );
  }
});